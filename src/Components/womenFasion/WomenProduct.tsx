
import React from 'react'
import { womenCollections } from '../Constants/womenCollections'

const WomenProduct = () => {
  return (
    <div>
      {womenCollections.map(({id, title, price}) =>(
        <div className='w-[288px] border border-gray-200 shadow' key={}>
            <img src="" alt="" />
            <p>{title}</p>
            <span>{price}</span>
        </div>
      ))}
    </div>
  )
}

export default WomenProduct
