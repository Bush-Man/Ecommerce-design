import React from 'react'
import { HouseFurnitureData } from '../../Data/HouseFurniture.js';
import "./AlsoLike.css";
import { Link } from 'react-router-dom';
const AlsoLike = () => {


  return (
      <div className='alsoLikeContainer'>
          <h1>Similar Products</h1>

          <div className="alsoLikeModal">
              
                
              {
            HouseFurnitureData.map(product =>
              <div className="prod_Card" key={product._id}>
                <Link className='links catInfoHover' to={`product/${product._id}`}>

                    <div>
                      <img src={product.image} alt="" className='prod_Img' />
                          
                  </div>
                <div className="prod_Info">
                  <h3>{product.name}</h3>
                  <h4>Price: {product.price}</h4>
                          
                          
                      <button className="btnProdCard">Add To Cart</button>
                 
                </div>
                </Link>
             
                    
              
               </div>
                
                
                )
              }
          
               
          
            </div>

    </div>
  )
}





export default AlsoLike