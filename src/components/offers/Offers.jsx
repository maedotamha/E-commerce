import React from 'react'
import './offers.css'
import exclusive_image from '../assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='Offers'>
        <div className="offers-left">
            <h1>Exlusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}
