import React, {  useContext, useState } from "react";
import {  FiCameraOff  } from  "react-icons/fi";
import { FaCameraRetro } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import Item from "../Components/Item/Item";
import { Camera } from "../Components/Camera/Camera";
import { ShopContext } from "../Context/ShopContext";


export const ShopSuggest = () => {
  const [showCam, setShowCam] = useState(false);
  const { products } = useContext(ShopContext)

    
  return (
    <div className="w-full">
      <div className="flex justify-center h-[560px] mt-7 mx-24">
        <Camera show={showCam} />
        <div
          className={`w-1/1 ml-10 transition-all duration-700 rounded-2xl shadow-2xl py-4 px-5 overflow-hidden ${products.length !== 0 ? showCam ? "w-1/2" : "w-1/1" : "w-0 hidden"}`}
        >
          <div className="flex items-center justify-between">
            <h1 className={`text-xl font-poppins text-[#626262] border-b-[3px] border-[#FF4141] inline-block mb-3 pb-2 ${products.length !== 0 ? "inline-block" : "hidden"}`}>
              Sản phẩm gợi ý
            </h1>
            <div className="flex">
              
              {showCam ?
              < FiCameraOff onClick={()=> setShowCam(pre => !pre)} className="text-4xl font-thin px-2 py-1 bg-[#FF4141]/50 rounded-md cursor-pointer hover:bg-[#ff4141]/60 mr-2" />
              : <FaCameraRetro  onClick={()=> setShowCam(pre => !pre)} className="text-4xl font-thin px-2 py-1 bg-[#FF4141]/50 rounded-md cursor-pointer hover:bg-[#ff4141]/60 mr-2" />
              }
              <IoReload className="text-4xl font-bold px-2 py-1 bg-[#FF4141]/50 rounded-md cursor-pointer hover:bg-[#ff4141]/60" />
            </div>
          </div>
          <div className="overflow-y-auto overflow-x-hidden p-2 h-[474px]">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4" data-aos-offset="10">
              {products.map((item, i) => {
                return (
                  <Item 
                  delay={i*200}
                  offset={-9999}
                    id={item._id}
                    key={i}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
