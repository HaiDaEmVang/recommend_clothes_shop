from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from PIL import Image
import numpy as np
import torch
import torch.nn as nn
from torchvision import models, transforms
from sklearn.metrics.pairwise import cosine_similarity
import cv2
from ultralytics import YOLO
from io import BytesIO
from fastapi.middleware.cors import CORSMiddleware
from ultralytics.engine.results import Results
from deepface import DeepFace
import tensorflow as tf
import h5py
from typing import List, Optional
import base64
import requests
import os


# Model Image Retrival
# 1. Load pre-trained model Resnet50
class FeatureExtractor(nn.Module):
    def __init__(self):
        super(FeatureExtractor, self).__init__()
        resnet = models.resnet50(pretrained=True)
        self.features = nn.Sequential(*list(resnet.children())[:-1])  # Remove the final classification layer

    def forward(self, x):
        x = self.features(x)
        return x.view(x.size(0), -1)  # Flatten

# 2. Function to extract features for a single image
# def extract_features(image, model, transform):
#     if image.mode != 'RGB':
#         image = image.convert('RGB')
#     image = transform(image).unsqueeze(0)  # Add batch dimension
#     with torch.no_grad():
#         features = model(image)
#     return features.numpy()
def extract_features(image_base64, model, transform):
    image_data = base64.b64decode(image_base64)
    image = Image.open(BytesIO(image_data))
    
    if image.mode != 'RGB':
        image = image.convert('RGB')
    image = transform(image).unsqueeze(0)  # Thêm chiều batch
    with torch.no_grad():
        features = model(image)
    return features.numpy()

# 3. Transform for input images
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

def retrieve_top_n_closest_labels(input_features_list, feature_database, labels, N=10):
    top_n_closest_labels = []
    for input_features in input_features_list:
        similarities = cosine_similarity(input_features.reshape(1, -1), feature_database)
        # Flatten the similarities array and get the indices of the top N closest images
        top_n_indices = np.argsort(similarities[0])[::-1][:N]
        # Get the corresponding labels for the top N closest images
        closest_labels = [labels[i] for i in top_n_indices]
        top_n_closest_labels.append(closest_labels)
        print(closest_labels)
    return top_n_closest_labels
# Model Image Retrival

# Cấu hình CORS
origins = [
    "http://localhost:3000",  # Địa chỉ frontend của bạn
]
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)
# Load model Fashion
fashion_model = YOLO("C:\\Users\\Anreal\\Desktop\\helloAc\\162925_Full_Stack_Ecommerce\\modelAI\\best.pt")
class_list = ['BAG', 'DRESS', 'HAT', 'JACKET', 'PANTS', 'SHIRT', 'SHOES', 'SHORT', 'SKIRT', 'SUNGLASS', 'HEADWEAR']
url_Images = "http://localhost:4000/allimages/detect"
nameImage_list = []
urlImage_list =[]

class FashionResponse(BaseModel):
    dataRes: List[dict]
    status: bool
    message: str

def load_image_into_numpy_array(data):
    image = Image.open(BytesIO(data))
    if image.mode == 'RGBA':
        image = image.convert('RGB')
    return np.array(image)

def get_formatted_filename(url):
    filename_with_extension = os.path.basename(url)
    # Split filename and discard the numbers at the end, keep the first part and the extension
    name_parts = filename_with_extension.split('_')
    if '.' in name_parts[-1]:
        first_part = '_'.join(name_parts[:-1])  # Combine everything except the last number part
        extension = name_parts[-1].split('.')[-1]
        return f"{first_part}.{extension}"
    
    return filename_with_extension

@app.post("/api-detect", response_model=FashionResponse)
async def detect_gender(file: UploadFile = File(...)):
    #detect-gender
    try:
        img = load_image_into_numpy_array(await file.read())
        result_gender =  DeepFace.analyze(img, actions=['gender'])
    except Exception as e:
        return FashionResponse(dataRes=[], status=False, message=str(e))
    
    # Run gender model
    if isinstance(result_gender, list):
        result_gender = result_gender[0]

    gender_confidence = result_gender['gender']
    label_gender = ""
    # IF CONFIDENCE < 0.5 => RESPONSE RELOAD NEW IMAGE
    if max(gender_confidence['Woman'], gender_confidence['Man']) <= 0.4 :
        label_gender = ""
    else:
        label_gender = "FEMALE" if gender_confidence['Woman'] > gender_confidence['Man'] else "MALE"
    
    #detect-fashion
    results = fashion_model(img)
    # detection information
    result_fashion = results[0]
    data = result_fashion.boxes
    labels = data.cls.tolist()
    detections = data.xyxy.numpy()
    cropped_images = []
    categorys = []

    for i, detection in enumerate(detections):
        label_idx = int(labels[i])
        xmin, ymin, xmax, ymax = map(int, detection[:4])

        fashion_confidence = float(data.conf[i])
        if fashion_confidence <= 0.6 :
            break
        # dataRes
        categorys.append(class_list[label_idx])

        # Crop images
        cropped_img = img[ymin:ymax, xmin:xmax]
        _, encoded_img = cv2.imencode('.jpg', cropped_img)
        cropped_image_bytes = encoded_img.tobytes()

        cropped_image_base64 = base64.b64encode(cropped_image_bytes).decode('utf-8')

        cropped_images.append(cropped_image_base64)

    if not cropped_images or not categorys:
        categorys  = ["PANTS", "SHORT", "SHIRT", "SHOES", "BAG", "HEADWEAR"]

    
    try:
        # Gửi yêu cầu tới server bên ngoài
        response = requests.get(url_Images, json={"gender": label_gender, "category": categorys})
        Yolo_result =[] 
        if response.status_code == 200:
            serverResImg = response.json()

            #image retrival
            model = FeatureExtractor()
            model.eval()
            data = np.load("C:\\Users\\Anreal\\Desktop\\helloAc\\162925_Full_Stack_Ecommerce\\modelAI\\labels.npy")
            labels = np.load("C:\\Users\\Anreal\\Desktop\\helloAc\\162925_Full_Stack_Ecommerce\\modelAI\\saved_features.npy")
            i=0
            vector=[]
            vector_name=[]
            for url in serverResImg:
                formatted_filename = get_formatted_filename(url)
                print(labels)
                if formatted_filename in labels:
                    index = np.where(labels == formatted_filename)[0][0]  # Get the index of the label
                    vector.append(data[index, :])
                    vector_name.append(formatted_filename)

            input_features_list = []
            for image in cropped_images:
                input_features = extract_features(image, model, transform)
                input_features_list.append(input_features)
            
            top_n_closest_labels = retrieve_top_n_closest_labels(input_features_list, vector,vector_name)
            # top_n_closest_labels = retrieve_top_n_closest_labels(input_features_list, data, labels)
            #image retrival

            Yolo_result.append({"categorys": categorys, "data": top_n_closest_labels})
            return FashionResponse(dataRes=Yolo_result, status=True, message="Success request")
        else:
            return FashionResponse(dataRes=[], status=False, message="Server not response")

    except Exception as e:
        print(e)
        return FashionResponse(dataRes=[], status=False, message=str(e))

def conver_urlimg_to_base64img(urlImage) :
    response = requests.get(urlImage)
    
    if response.status_code == 200:
        image_base64 = base64.b64encode(response.content).decode('utf-8')
        return image_base64
    else:
        return None
        
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("YOLO_API:app", host="127.0.0.1", port=8000, reload=True)

