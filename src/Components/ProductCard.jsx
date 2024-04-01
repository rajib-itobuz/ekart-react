import React, { useEffect } from 'react'
import RatingStarComponent from './RatingComponent'

const ProductCard = ({ title, price, description, image, rating, addtoCart, removefromCart, count }) => {

    return (
        <div className='flex max-w-[280px] overflow-hidden w-full h-[500px] flex-col justify-between shrink-0' >
            <img src={image} className='w-full h-[60%] object-contain' alt="" />
            <h3 className='font-bold line-clamp-2'>{title}</h3>
            <div className='space-y-2'>
                <h5 className='font-bold'>$ {price.toFixed(2)} <s className='font-light text-xs text-neutral-400'>{(price - price * 0.05).toFixed(2)}</s></h5>
                <h5 className='font-bold flex justify-end items-center gap-3'>{RatingStarComponent(rating.rate)} <span className='font-medium text-sm text-neutral-500'>{rating.count}</span></h5>
                <div className={`h-[55px] w-full flex justify-start gap-1 ${count > 0 ? '-translate-x-[100%]' : ''} transition-all duration-[0.2s] ease-in-out`}>
                    <button className='bg-black w-full h-full shrink-0 text-white rounded-md py-3 border-2 border-neutral-950' onClick={() => addtoCart(title, image, price)}>Add to Cart</button>
                    <div className='w-full h-full shrink-0 flex justify-center gap-2'>
                        <input type="text" value={count} className='border-2 text-center text-xl rounded-md w-[40%]' readOnly />
                        <button
                            className='bg-black h-full text-white w-[22%] rounded-md py-3 border-2 border-neutral-950 hover:bg-white hover:text-neutral-950'
                            onClick={() => addtoCart(title, image, price)}>+</button>
                        <button
                            className='bg-black h-full text-white w-[22%] rounded-md py-3 border-2 border-neutral-950 hover:bg-white hover:text-neutral-950'
                            onClick={() => removefromCart(title, price)}>-</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard