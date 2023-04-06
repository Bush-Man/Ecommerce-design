import React from 'react'
import { HouseFurnitureData } from '../../Data/HouseFurniture.js';
import "./HouseFurnitureCategory.css";
import { Link } from 'react-router-dom';
const HouseFurnitureCategory = () => {


  return (
      <div className='houseFurnitureContainer'>
          <h1>House Furniture</h1>

          <div className="houseFurnitureModal">
              
                
              {
            HouseFurnitureData.map(furniture =>
              <div className="furnitureCard" key={furniture._id}>
                <Link className='links catInfoHover' to={`product/${furniture._id}`}>

                    <div>
                      <img src={furniture.image} alt="" className='furnitureImg' />
                          
                  </div>
                <div className="furnitureInfo">
                  <h3>{furniture.name}</h3>
                  <h4>Price: {furniture.price}</h4>
                          
                          
                      <button className="btnFurnitureCard">Add To Cart</button>
                 
                </div>
                </Link>
             
                    
              
               </div>
                
                
                )
              }
          
               
          
            </div>

    </div>
  )
}





export default HouseFurnitureCategory