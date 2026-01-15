import { Product } from "@/types/products";
import React, { useEffect } from "react";
import { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

const PaymentDetails = () => {

  const {productId} = useParams()
  const {product SetProduct} = useState<Product: any[]/>()

  const images = [
    "/images/pad1.svg",
    "/images/pad2.svg",
    "/images/pad3.svg",
    "/images/pad4.svg",
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [qty, setQty] = useState(2);


  useEffect(() => {
    async function fetchproductById() {
     try{
 const res = await fetch{"https://dummyjson.com/products/${productId}"}
      {!res.ok} = throw new Error("Unable to fetch data")
      const data = await res.json()
      SetProduct(data)
     } catch (error) {
      console.log(error);
      
     }
    }
    fetchproductById()
  },[])

  return (
    <div className="wrapper ">
      <div className="flex items-center gap-4 py-20">
        <Link to="/" className="text-[#BFBFBF] text-base font-medium">
          Account
        </Link>
        <span className="text-[#BFBFBF] text-base font-medium">/</span>
        <Link to="/about" className="text-[#BFBFBF] text-base font-medium">
          Gaming
        </Link>
        <span className="text-[#BFBFBF] text-base font-medium">/</span>
        <p className="text-base font-medium">Havic HV G-92 Gamepad</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-8" >
        <div className=" w-[171px] md:mx-0 mx-auto space-y-3">
          <h1>Product ID: {productId}</h1>
          {images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="p-2 bg-[#F5F5F5] rounded-sm flex justify-center items-center"
              role="button"
              onClick={() => setCurrentImage(image)}
            >
              <img src={image} alt="gampad" />
            </div>
          ))}
        </div>
        <div className="md:w-[500px] w-[300px] md:mx-0 mx-auto md:h-[600px] h-[450px]  bg-[#F5F5F5] pt-[154px] pb-[131px] px-[27px] rounded-sm md:mt-0 my-8">
          <img src={currentImage} alt="gamepad" className="w-full h-full" />
        </div>
        {/* Payment and delivery section */}
        <div className="max-w-sm font-sans space-y-4 ">
          <h2 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h2>

          <div className="flex items-center gap-2 text-sm">
            <div className="text-yellow-400">★★★★★</div>
            <span className="text-gray-400">(150 Reviews)</span>
            <span className="text-green-500">| In Stock</span>
          </div>

          <p className="text-2xl font-medium">$192.00</p>

          <p className="md:text-sm text-xs font-medium">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>

          <hr />

          <div className="flex items-center gap-4">
            <span className="text-xl  font-normal">Colours:</span>
            <div className="w-5 h-5 rounded-full border bg-[#A0BCE0]" />
            <div className="w-5 h-5 rounded-full bg-[#E07575]" />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl font-n">Size:</span>
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`w-8 h-8 text-sm border rounded ${
                  size === "M" ? "bg-secondary text-white border-secondary" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center border rounded">
              <button
                className="px-3 border"
                onClick={() => setQty((q) => q - 1)}
              >
                -
              </button>
              <span className="px-4">{qty}</span>
              <button
                className="px-3 bg-secondary  text-white"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>

            <button className="flex-1 border-secondary bg-secondary text-white py-2 rounded">
              Buy Now
            </button>

            <button className="border rounded p-2">
              <BiHeart size={18} />
            </button>
          </div>

          <div className="border rounded p-4 space-y-3 text-sm w-[399px]">
            <div className="flex gap-3 items-start">
              <img
                src="/images/DelivryIcon.svg"
                alt="delivryIcon"
                className="w-[26px]"
              />
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-gray-500">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            <hr />

            <div className="flex gap-3 items-start">
              <span>
                <img
                  src="/images/ReturnIcon.svg"
                  alt="returnIcon"
                  className="w-[26px]"
                />
              </span>
              <div>
                <p className="font-medium">Return Delivery</p>
                <p className="text-gray-500">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
