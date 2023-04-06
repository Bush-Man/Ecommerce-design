import React from 'react'
import "./SingleProductCard.css";
const SingleProductCard = ({ product}) => {
  return (
    <div className='singleProductCard'>
             
                  <img src={product.image} alt="" />
              
            
    </div>
  )
}

export default SingleProductCard