import React from 'react'
import WishlistsProducts from '../Components/wishLists/WishlistsProducts'
import JustForYou from '../Components/wishLists/JustForYou'

const WishLists = () => {
  return (
    <div className='wrapper'>
      <WishlistsProducts/>
      <JustForYou/>
    </div>
  )
}

export default WishLists
