

import React, { useEffect, useRef, useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { MdDriveFolderUpload } from "react-icons/md";
import { FaCameraRotate } from "react-icons/fa6";
import { FourSquare } from "react-loading-indicators"

export const Camera = ({ show }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);

  useEffect(() => {
    const getWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      } catch (err) {
        console.error("Error accessing webcam:", err);
      }
    };

    getWebcam();

    // Dọn dẹp khi component unmount
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

      canvasRef.current.toBlob((blob) => {
        const formData = new FormData();
        formData.append("image", blob, "capture.png");

        // Gửi dữ liệu hình ảnh đến server
        // axios.post("/upload", formData)
        //   .then((response) => {
        //     console.log("Server response:", response.data);
        //   })
        //   .catch((error) => {
        //     console.error("Error uploading image:", error);
        //   });
      }, "image/png");
    }
  };

  return (
    <div className={`flex justify-center bg-black h-[560px] overflow-hidden rounded-2xl shadow-2xl transition-all duration-700 ${show ? "w-[800px]" : "w-0 "} relative`}>
      <video ref={videoRef} height="100%" autoPlay style={{transform: 'scale(-1, 1)'}}></video>
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      <div className="absolute bottom-12 right-1/2 transform translate-x-1/2">
        <button onClick={handleCapture} className=" p-3 rounded-full bg-white/40  cursor-pointer hover:bg-white/60"><FaCameraRotate className="text-2xl text-black"/></button>
        <button onClick={handleCapture} className=" p-4 rounded-full bg-[#FF4141]/80  cursor-pointer hover:bg-[#ff4141]/60 mx-4"><FaCameraRetro className="text-2xl text-white"/></button>
        <button onClick={handleCapture} className="p-3 rounded-full bg-white/40  cursor-pointer hover:bg-white/60"><MdDriveFolderUpload  className="text-2xl text-black"/></button>
      </div>
      <div className="absolute bottom-1/2 right-1/2 transform translate-x-1/2 translate-y-1/2">
        <FourSquare color="#FF4141" size="medium" text="" textColor="" />
      </div>
    </div>
  );
};
