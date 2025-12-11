import React from 'react'
import { mensFashion } from '../Constants/mensFashion'
import { FaStar } from 'react-icons/fa'

const MenProducts = () => {
  return (
     <div className="wrapper  py-20">
          <div className="grid grid-cols-4 gap-4">
            {mensFashion.map(({ id, title, image, price }) => (
              
              <div className="bg-white p-4 shadow rounded relative border border-gray-200 transform transition-transform duration-300 hover:scale-105" key={id}>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-500">{price}</p>
                <div className="flex items-center mt-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <div
                  className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-100"
                >
                  <span className="group-hover:hidden">+</span>
                  <span className="hidden group-hover:block">Add to Cart</span>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default MenProducts
