import React from 'react'
import { GardenSuppliesData } from '../../Data/GardenSuppliesData';
import "./GardenSuppliesCategory.css";
import { Link } from "react-router-dom";

const GardenSuppliesCategory = () => {



  return (
      <div className='gardenSuppliesContainer'>
          <h1>Construction Materials</h1>

          <div className="gardenSuppliesModal">
              
                
              {
          GardenSuppliesData.map(tool =>
                  <div className="gardenToolCard" key={tool._id}>
                    <Link className='links' to={`product/${tool._id}`}>
                    <div>
                      <img src={tool.image} alt="" className='gardenToolImg' />
                          
                  </div>
                <div className="toolInfo catInfoHover">
                  <h3>{tool.name}</h3>
                  <h4>Price : {tool.price}</h4>
                          
                          
                      <button className="btnGardenCard">Add To Cart</button>
                 
                </div>
             
                    
              
                </Link>
               </div>
                
                
                )
              }
          
               
          
            </div>

    </div>
  )
}



export default GardenSuppliesCategory