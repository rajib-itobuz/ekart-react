import React from 'react'
import { assets } from '../assets'
import CartCard from './CartCard'

const SideBar = ({ isOpen, toggleCartOpen, cart, addtoCart, removefromCart }) => {
    console.log(cart);
    return (
        // 
        <div className={` ${isOpen ? 'translate-x-[100%]' : 'translate-x-[0%]'} z-50 p-4 space-y-3 transition-all duration-[0.3s] ease-linear w-full shadow-xl max-w-[320px] lg:max-w-[500px] h-screen bg-white right-0 absolute top-0 flex flex-col`}>
            <img src={assets.crossIcon} width={"40px"} alt="" className='cursor-pointer ms-auto' onClick={toggleCartOpen} />
            <h3 className='text-2xl mt-3 font-semibold tracking-wider'>Your Cart</h3>
            {cart.length === 0 &&
                <div className='h-screen space-y-10 flex flex-col justify-center items-center'>
                    <h4 className='text-4xl tracking-wider text-neutral-200 text-center'>Ooopss!<br />Cart is missing</h4>
                    <button className='bg-black w-fit rounded-md tracking-widest text-white px-4 py-2' onClick={toggleCartOpen} >Browse</button>
                </div>
            }

            {cart.length > 0 && <div className='space-y-[40px] h-full overflow-y-scroll no-scrollbar'>
                {
                    cart.map((cartitem, index) => <CartCard key={index} {...cartitem} movetoCart={addtoCart} removefromCart={removefromCart} />)
                }
                <button className='bg-black w-fit rounded-md tracking-widest text-white px-4 py-2' onClick={toggleCartOpen} >Checkout</button>
            </div>}




        </div>
    )
}

export default SideBar