
import React from 'react'
import { useState } from "react";
import { BiHeart } from 'react-icons/bi';

const PaymentDetails = () => {
    const [qty, setQty] = useState(2);
  return (
    <div className="wrapper">
      <div className="w-[170px]">
        <img src="/images/pad1.svg" alt="gampad" />
        <img src="/images/pad1.svg" alt="gampad" />
        <img src="/images/pad1.svg" alt="gampad" />
        <img src="/images/pad1.svg" alt="gampad" />
      </div>
      <div className="w-[500px]"></div>
      <div className="max-w-sm font-sans space-y-4 ">
        <h2 className="text-xl font-semibold">Havic HV G-92 Gamepad</h2>

        <div className="flex items-center gap-2 text-sm">
          <div className="text-yellow-400">★★★★★</div>
          <span className="text-gray-400">(150 Reviews)</span>
          <span className="text-green-500">| In Stock</span>
        </div>

        <p className="text-2xl font-medium">$192.00</p>

        <p className="text-sm text-gray-600">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>

        <hr />

        <div className="flex items-center gap-4">
          <span className="text-sm">Colours:</span>
          <div className="w-4 h-4 rounded-full border" />
          <div className="w-4 h-4 rounded-full bg-red-500" />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm">Size:</span>
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className={`w-8 h-8 text-sm border rounded ${
                size === "M" ? "bg-red-500 text-white border-red-500" : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center border rounded">
            <button className="px-3" onClick={() => setQty((q) => q - 1)}>
              -
            </button>
            <span className="px-4">{qty}</span>
            <button
              className="px-3 bg-red-500 text-white"
              onClick={() => setQty((q) => q + 1)}
            >
              +
            </button>
          </div>

          <button className="flex-1 bg-red-500 text-white py-2 rounded">
            Buy Now
          </button>

          <button className="border rounded p-2">
            <BiHeart size={18} />
          </button>
        </div>

        <div className="border rounded p-4 space-y-3 text-sm">
          <div className="flex gap-3 items-start">
            <span>🚚</span>
            <div>
              <p className="font-medium">Free Delivery</p>
              <p className="text-gray-500">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>

          <hr />

          <div className="flex gap-3 items-start">
            <span>↩️</span>
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
  );
}

export default PaymentDetails
