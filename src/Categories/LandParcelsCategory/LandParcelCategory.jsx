import React from 'react'
import "./LandParcelCategory.css";
import { useState } from "react";
import { landParcelData } from '../../Data/LandParcelData';
const LandParcelCategory = () => {
    const [readMore, setReadMore] = useState(false);
    const handleClick = () => {
        setReadMore((prev => !prev))
        
    }
  return (
      <div className='LPCategoryContainer'>
          <h1>Land Parcels Category</h1>

          <div className="landsContainer">
          {/*Land parcel start */}
              
          {
              landParcelData.map(land =>
            <div className="singleLandCard" key={land._id}>
               <div className="landInfo">
                  <h3>Size: {land.size}</h3>
                  <h4>Price: {land.price}</h4>
                          <h4>Location: {land.location}</h4>
                          {readMore ? (
                              //When true redirect to single land parcel page
                              <>
                          <h4>Google Map: {land.googleMap}</h4>
                          <h4>Main Road: {land.mainRoad}</h4>
                            </>
                          ) : ""}
                      
                      <button onClick={handleClick} className="btnLandCard">Read More</button>
                 
                      </div>
             
                    
                <div>
                      <img src={land.image} alt="" className='landImg' />
                          
                </div>
               </div>
                
                
                )
            }
          
               
          {/*Land parcel end */}
            </div>

    </div>
  )
}

export default LandParcelCategory