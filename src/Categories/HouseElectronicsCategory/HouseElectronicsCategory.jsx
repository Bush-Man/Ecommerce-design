import React from 'react';
import "./HouseElectronicsCategory.css";
import { HouseElectronicsCategoryData } from "../../Data/HouseElectronicsCategoryData.js";
import { Link } from 'react-router-dom';
const HouseElectronicsCategory = () => {
  return (
    <div className='houseElectronicsContainer'>
          <h1>House Electronics</h1>
          <div className="houseElectronicsModal">
              {
                  
                   HouseElectronicsCategoryData.map(houseElectronic =>
                       <div className="houseElectronicCard" key={houseElectronic._id} >
                           <Link className='links' to={`product/${houseElectronic._id}`}>
                          <div>
                              <img src={houseElectronic.image} alt="" className='houseElectronicImg'/>
                          </div>
                          <div className="houseElectonicInfo catInfoHover">
                              <h4>{houseElectronic.Desc}</h4>
                              
                              <h4>Price: {houseElectronic.price}</h4>
                       <button className="btnHouseElectronicCard">Add To Cart</button>
                          </div>
                  
                         </Link>
                      </div>
                  )
              }

          </div>
    </div>
  )
}

export default HouseElectronicsCategory