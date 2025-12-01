import React from 'react'
import { Link } from 'react-router-dom';

const Stories = () => {
  return (
    <div className="wrapper">
      <div className='flex items-center gap-2 py-20'>
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/about" className='text-lg font-normal'>About</Link>
      </div>
      <div className="flex  justify-between items-center gap-5 py-20">
        <div className="w-[525px] text-xl font-normal space-y-10">
          <h3 className="text-4xl font-bold">Our Story</h3>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img src="/images/story.svg" alt="storyImagea" />
      </div>
    </div>
  );
}

export default Stories
