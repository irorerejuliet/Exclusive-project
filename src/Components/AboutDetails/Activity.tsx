import React from 'react'
import { activityData } from '../Constants/aboutData'

const Activity = () => {
  return (
    <div className="my-40 md:flex flex-row justify-center gap-40 items-center">
      {activityData.map(({ id, image, title, likes }) => (
        <div
          key={id}
          className={`flex flex-col items-center text-center md:py-10 px-6 py-5 border border-gray-200 w-[270px] shadow rounded-md
      ${id === 2 ? "bg-primary text-white" : ""}`}
        >
          <div className="w-16 h-16 rounded-full bg-[#C1C0C1] p-1 flex items-center justify-center">
            <img
              src={image}
              alt="delivery-service"
              className={`w-12 h-12 rounded-full p-2 bg-black ${id === 2 ? "bg-white" : ""} `}
            />
          </div>
          <p className="text-3xl font-bold pt-3">{likes}</p>
          <h3 className="text-base font-semibold mt-4">{title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Activity
