import React from 'react'
import "./ProductsCardItem.css";
import { Link } from 'react-router-dom';
const ProductsCardItem = ({product}) => {
  return (
    <div className='productsCardItem'>
      <Link to="/product/:id" className='links'>
              <div className='card-ItemTop'>
                  <img src={product.image} alt="" />
              </div>
              <div className='cardItemBotom'>
                 
                      
                      <p>{product.desc.substring(0,68)}...</p>
                      <div>
                          
                  <span>{product.price}</span>
                  
                          <button className='btnCardItem'>+</button>
                      </div>
                  
                      
          </div>
      </Link>
    </div>
  )
}

export default ProductsCardItem