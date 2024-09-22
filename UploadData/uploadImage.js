const backend_url = "http://localhost:4000";
const image = document.getElementById("image");
const dataProduct = [
  {
    "STT": 1,
    "Product title": "Bucket",
    "Product description": "Velvet softness on forehead.",
    "Price": 13,
    "Offer price": 11,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_1.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_1.2.jpg"
  },
  {
    "STT": 2,
    "Product title": "Under Armour",
    "Product description": "Premium leather outer layer.",
    "Price": 30,
    "Offer price": 25,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_2.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_2.2.jpg"
  },
  {
    "STT": 3,
    "Product title": "Under Armour",
    "Product description": "Silk lining for comfort.",
    "Price": 26,
    "Offer price": 12,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_3.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_3.2.jpg"
  },
  {
    "STT": 4,
    "Product title": "Nike",
    "Product description": "Golden accents add luxury.",
    "Price": 20,
    "Offer price": 10,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_4.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_4.2.jpg"
  },
  {
    "STT": 5,
    "Product title": "Under Armour",
    "Product description": "Supple suede upper material.",
    "Price": 27,
    "Offer price": 20,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_5.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_5.2.jpg"
  },
  {
    "STT": 6,
    "Product title": "Mountain",
    "Product description": "Vibrant colors to match.",
    "Price": 17,
    "Offer price": 8,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_6.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_6.2.jpg"
  },
  {
    "STT": 7,
    "Product title": "PFG",
    "Product description": "Stylish designs for fashion.",
    "Price": 11,
    "Offer price": 9,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_7.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_7.2.jpg"
  },
  {
    "STT": 8,
    "Product title": "USA",
    "Product description": "Elegant curves on frame.",
    "Price": 28,
    "Offer price": 22,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_8.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_8.2.jpg"
  },
  {
    "STT": 9,
    "Product title": "Under Armour",
    "Product description": "Dazzling rhinestones adorn front.",
    "Price": 29,
    "Offer price": 19,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_9.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_9.2.jpg"
  },
  {
    "STT": 10,
    "Product title": "Nike",
    "Product description": "Chic patterns for boys.",
    "Price": 25,
    "Offer price": 26,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_10.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_10.2.jpg"
  },
  {
    "STT": 11,
    "Product title": "Puma",
    "Product description": "Adjustable straps for fit.",
    "Price": 16,
    "Offer price": 10,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_11.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_11.2.jpg"
  },
  {
    "STT": 12,
    "Product title": "Costa",
    "Product description": "Quick-dry fabric for active.",
    "Price": 26,
    "Offer price": 22,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_12.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_12.2.jpg"
  },
  {
    "STT": 13,
    "Product title": "Dickie",
    "Product description": "Packable design for travel.",
    "Price": 25,
    "Offer price": 19,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_13.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_13.2.jpg"
  },
  {
    "STT": 14,
    "Product title": "Under Armour",
    "Product description": "Magnetic snapback closure.",
    "Price": 19,
    "Offer price": 15,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_14.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_14.2.jpg"
  },
  {
    "STT": 15,
    "Product title": "Under Armour",
    "Product description": "One-size-fits-all comfort.",
    "Price": 22,
    "Offer price": 16,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_15.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_15.2.jpg"
  },
  {
    "STT": 16,
    "Product title": "Columbia",
    "Product description": "Toddler-friendly soft headband.",
    "Price": 20,
    "Offer price": 18,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_16.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_16.2.jpg"
  },
  {
    "STT": 17,
    "Product title": "Under Armour",
    "Product description": "Youthful styles for teens.",
    "Price": 23,
    "Offer price": 16,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_17.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_17.2.jpg"
  },
  {
    "STT": 18,
    "Product title": "Under Armour",
    "Product description": "Classic designs for adults.",
    "Price": 29,
    "Offer price": 18,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_18.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_18.2.jpg"
  },
  {
    "STT": 19,
    "Product title": "Columbia",
    "Product description": "Senior-friendly comfort fit.",
    "Price": 45,
    "Offer price": 30,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_19.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_19.2.jpg"
  },
  {
    "STT": 20,
    "Product title": "Bucket",
    "Product description": "Kids' favorite cartoon themes.",
    "Price": 25,
    "Offer price": 19,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_20.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_20.2.jpg"
  },
  {
    "STT": 21,
    "Product title": "Mision",
    "Product description": "Soft, stretchy, and stylish.",
    "Price": 16,
    "Offer price": 11,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_21.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_21.2.jpg"
  },
  {
    "STT": 22,
    "Product title": "Calvin Klein",
    "Product description": "Water-resistant and breathable.",
    "Price": 15,
    "Offer price": 13,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_22.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_22.2.jpg"
  },
  {
    "STT": 23,
    "Product title": "Under Armour",
    "Product description": "Fashionable, yet functional too.",
    "Price": 30,
    "Offer price": 22,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_23.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_23.2.jpg"
  },
  {
    "STT": 24,
    "Product title": "USA",
    "Product description": "Durable, long-lasting wear.",
    "Price": 26,
    "Offer price": 20,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_24.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_24.2.jpg"
  },
  {
    "STT": 25,
    "Product title": "Adidas",
    "Product description": "Comfortable, versatile design.",
    "Price": 23,
    "Offer price": 19,
    "Product category": "MALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_25.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_25.2.jpg"
  },
  {
    "STT": 26,
    "Product title": "Puma",
    "Product description": "Luxurious feel, affordable price.",
    "Price": 35,
    "Offer price": 26,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_26.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_26.2.jpg"
  },
  {
    "STT": 27,
    "Product title": "Puma",
    "Product description": "Beautifully crafted, inside out.",
    "Price": 26,
    "Offer price": 20,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_27.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_27.2.jpg"
  },
  {
    "STT": 28,
    "Product title": "Flower",
    "Product description": "Convenient, easy to wear.",
    "Price": 25,
    "Offer price": 23,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_28.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_28.2.jpg"
  },
  {
    "STT": 29,
    "Product title": "Beanie",
    "Product description": "Ageless design for all.",
    "Price": 30,
    "Offer price": 22,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_29.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_29.2.jpg"
  },
  {
    "STT": 30,
    "Product title": "Hope",
    "Product description": "Perfect for any occasion.",
    "Price": 40,
    "Offer price": 37,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_30.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_30.2.jpg"
  },
  {
    "STT": 31,
    "Product title": "Beanie",
    "Product description": "Soft, luxurious, and warm.",
    "Price": 22,
    "Offer price": 21,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_31.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_31.2.jpg"
  },
  {
    "STT": 32,
    "Product title": "Bucket",
    "Product description": "Stylish, yet comfortable too.",
    "Price": 20,
    "Offer price": 12,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_32.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_32.2.jpg"
  },
  {
    "STT": 33,
    "Product title": "Beanie",
    "Product description": "Convenient, packable design.",
    "Price": 26,
    "Offer price": 13,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_33.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_33.2.jpg"
  },
  {
    "STT": 34,
    "Product title": "Bucket",
    "Product description": "Age-appropriate for kids.",
    "Price": 23,
    "Offer price": 21,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_34.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_34.2.jpg"
  },
  {
    "STT": 35,
    "Product title": "Under Armour",
    "Product description": "Beautiful, elegant, and chic.",
    "Price": 31,
    "Offer price": 25,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_35.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_35.2.jpg"
  },
  {
    "STT": 36,
    "Product title": "Under Armour",
    "Product description": "Premium materials used here.",
    "Price": 20,
    "Offer price": 18,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_36.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_36.2.jpg"
  },
  {
    "STT": 37,
    "Product title": "Under Armour",
    "Product description": "Vibrant colors to impress.",
    "Price": 22,
    "Offer price": 21,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_37.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_37.2.jpg"
  },
  {
    "STT": 38,
    "Product title": "Levi's",
    "Product description": "Adjustable straps for comfort.",
    "Price": 32,
    "Offer price": 23,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_38.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_38.2.jpg"
  },
  {
    "STT": 39,
    "Product title": "Under Armour",
    "Product description": "Quick-dry fabric for sports.",
    "Price": 26,
    "Offer price": 16,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_39.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_39.2.jpg"
  },
  {
    "STT": 40,
    "Product title": "Under Armour",
    "Product description": "One-size-fits-all, easy wear.",
    "Price": 29,
    "Offer price": 28,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_40.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_40.2.jpg"
  },
  {
    "STT": 41,
    "Product title": "Harris",
    "Product description": "Luxurious, comfortable, and warm.",
    "Price": 12,
    "Offer price": 11,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_41.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_41.2.jpg"
  },
  {
    "STT": 42,
    "Product title": "Under Armour",
    "Product description": "Beautiful designs for ladies.",
    "Price": 30,
    "Offer price": 28,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_42.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_42.2.jpg"
  },
  {
    "STT": 43,
    "Product title": "Under Armour",
    "Product description": "Convenient, travel-friendly too.",
    "Price": 26,
    "Offer price": 16,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_43.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_43.2.jpg"
  },
  {
    "STT": 44,
    "Product title": "Adidas",
    "Product description": "Ageless style for all ages.",
    "Price": 23,
    "Offer price": 22,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_44.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_44.2.jpg"
  },
  {
    "STT": 45,
    "Product title": "Under Armour",
    "Product description": "Soft, stretchy, and stylish.",
    "Price": 26,
    "Offer price": 12,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_45.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_45.2.jpg"
  },
  {
    "STT": 46,
    "Product title": "Wilson",
    "Product description": "Durable, long-lasting wear.",
    "Price": 10,
    "Offer price": 8,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_46.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_46.2.jpg"
  },
  {
    "STT": 47,
    "Product title": "Bucket",
    "Product description": "Fashionable, functional design.",
    "Price": 34,
    "Offer price": 26,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_47.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_47.2.jpg"
  },
  {
    "STT": 48,
    "Product title": "Under Armour",
    "Product description": "Comfortable, versatile too.",
    "Price": 23,
    "Offer price": 20,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_48.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_48.2.jpg"
  },
  {
    "STT": 49,
    "Product title": "Volcom",
    "Product description": "Beautifully crafted, inside out.",
    "Price": 35,
    "Offer price": 30,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_49.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_49.2.jpg"
  },
  {
    "STT": 50,
    "Product title": "Flower",
    "Product description": "Luxurious feel, affordable price.",
    "Price": 16,
    "Offer price": 12,
    "Product category": "FEMALE",
    "Product image 1": "ImagesData/Head_wear/Headwear_50.1.jpg",
    "Product image 2": "ImagesData/Head_wear/Headwear_50.2.jpg"
  }
]

image.addEventListener("change", (e) => {
  const files = Array.from(e.target.files);
  let i = 0;
  let productList = [];

  for (i; i < 50; i++) {
    let product = {
      name: dataProduct[i]["Product title"],
      description: dataProduct[i]["Product description"],
      category: dataProduct[i]["Product category"],
      new_price: dataProduct[i]["Offer price"],
      old_price: dataProduct[i].Price,
      image: [files[2 * i], files[i * 2 + 1]],
    };
    productList.push(product);
  }

  productList.forEach(e => {
    uploadProduct(e);
  })
});

const uploadProduct = async (data) => {
  let formData = new FormData();
  let objectData;
  formData.append("product", data.image[0]);
  formData.append("product", data.image[1]);
  const url = "http://localhost:4000";
  await fetch(`${url}/upload`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => (objectData = data));
  if (objectData.success) {
    data.image = objectData.image_url;
    console.log(data)
    await fetch(`${url}/addproduct`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("oke :")
        // data.success ? alert("Product Added") : alert("Failed");
      });
  }else {
    console.log("loi tai: ")
  }
};
