import React from 'react'
import { HouseImprovementData } from '../../Data/HouseImprovement.js'
import "./HouseImprovement.css";
const HouseImprovement = () => {
  return (
      <div className='houseImprovementContainer'>
          <h1>House Improvement</h1>
          <div className="houseimprovementModal">
              {
                  
                  HouseImprovementData.map(houseItem =>
                      <div className="houseItemCard" key={houseItem._id} >
                          <div>
                              <img src={houseItem.image} alt="" className='houseItemImg'/>
                          </div>
                          <div className="houseItemInfo">
                              <h4>{houseItem.desc}</h4>
                              
                              <h4>Price: {houseItem.price}</h4>
                       <button className="btnHouseItemCard">Add To Cart</button>
                          </div>
                  
                      </div>
                  )
              }

          </div>
    </div>
  )
}

export default HouseImprovement