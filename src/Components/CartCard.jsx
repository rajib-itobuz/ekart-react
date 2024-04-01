import React from 'react'

const CartCard = ({ title, imageUrl: image, price, quantity, movetoCart, removefromCart, }) => {
    console.log(image);

    return (
        <div className='flex w-full overflow-hidden justify-between shrink-0 gap-3' >
            <img src={image} className='w-full max-w-[200px] max-h-[200px] h-[60%] object-scale-down' alt="" />
            <div className='space-y-2 w-full flex flex-col items-start justify-center'>
                <h3 className='font-bold line-clamp-2'>{title}</h3>
                <h5 className='font-bold'>$ {price.toFixed(2)} <s className='font-light text-xs text-neutral-400'>{(price - price * 0.05).toFixed(2)}</s></h5>
                <div className='h-[50px] w-full shrink-0 flex justify-start gap-2'>
                    <input type="text" value={quantity} className='border-2 text-center text-xl rounded-md w-[40%]' readOnly />
                    <button className='bg-black h-full text-white w-[22%] rounded-md py-3 border-2 border-neutral-950 hover:bg-white hover:text-neutral-950' onClick={() => movetoCart(title, price)}>+</button>
                    <button className='bg-black h-full text-white w-[22%] rounded-md py-3 border-2 border-neutral-950 hover:bg-white hover:text-neutral-950' onClick={() => removefromCart(title, price)}>-</button>
                </div>
            </div>
        </div>
    )
}

export default CartCard