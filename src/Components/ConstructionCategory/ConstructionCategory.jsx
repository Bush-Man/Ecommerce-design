import React from 'react'
import {ConstructionMaterialData } from "../../Data/ConstructionMaterialData.js"
import "./ConstructionCategory.css";
import { Link } from 'react-router-dom';
import SingleProductCard from '../SingleProductCard/SingleProductCard.jsx';
const ConstructionCategory = () => {


  return (
      <div className='constProdContainer'>
          <h1>Similar Products</h1>

          <div className="constProdModal">
              
                
              {
            ConstructionMaterialData.map(product =>
              <div className="materialCard" key={product._id}>
                <Link className='links catInfoHover' to={`product/${product._id}`}>
                     <SingleProductCard product={product} key={product._id}/>
                </Link>
             
                   
              
               </div>
                
                
                )
              }
          
               
          
            </div>

    </div>
  )
}





export default ConstructionCategory