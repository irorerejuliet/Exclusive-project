
import React from 'react'
import { foundersData } from '../Constants/aboutData';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Founders = () => {
  return (
    <div className="lg:flex flex-row justify-between  items-center gap-10 wrapper">
      {foundersData.map(({ id, image, title, subTitle }) => (
        <div key={id}>
          <div className="w-[370px] bg-[#F5F5F5] pt-6 ">
            <img src={image} alt="tomCruise" className="text-center m-auto" />
          </div>
          <p className='text-2xl font font-medium pt-2'>{title}</p>
          <p className='text-base font-normal py-1'>{subTitle}</p>
          <div className="text-black flex gap-4 items-center py-1">
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Founders
