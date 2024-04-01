import React, { useEffect } from 'react'
import { assets } from '../assets'

const NavBar = ({ cart, toggleCartOpen }) => {
  return (
    <div className='w-full bg-white flex justify-center sticky top-0 z-40'>
      <div className='flex w-[70%] max-w-[1000px] items-center justify-between h-[60px] bg-white'>

        <h3 className='font-bold text-nowrap cursor-pointer'>Ecommerce Website</h3>
        <div className='relative' onClick={toggleCartOpen}>
          <img src={assets.cartIcon} width={"40px"} className='cursor-pointer' />
          <h3 className='absolute px-2 py-1 text-white right-0 translate-x-1/3 top-0 bg-orange-500 text-xs rounded-full'>{cart.length}</h3>
        </div>
      </div>
    </div>
  )
}

export default NavBar