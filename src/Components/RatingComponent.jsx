import React from 'react'
import { assets } from '../assets'

const RatingStarComponent = (rating) => {

    return (
        <div className='flex justify-center items-center'>
            {
                Array.apply(null, { length: Math.floor(rating) }).map(
                    (item, ind) => <img src={assets.fullstar} key={ind} width={"20px"} fill={"#f8e831"} />
                )
            }
            {(rating * 10) % 10 ? <img src={assets.halfstar} width={"20px"} fill={"#f8e831"} /> : null}
        </div>
    )
}

export default RatingStarComponent