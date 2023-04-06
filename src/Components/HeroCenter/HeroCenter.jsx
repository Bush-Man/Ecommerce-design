//import React,{useState} from 'react';
import "./HeroCenter.css";
import { centerImagesData as imgData } from '../../Data/HeroCenterData';


const HeroCenter = () => {

  return (
      <div className="sliderContainer" >{
          imgData.map((pic) => {
              return (
                  
                  <div key={pic._id} > 
                      
                      
                          
                      <img src={pic.image} alt="" className="slideImg"/>
                      
                    
                  </div>
              )
          })
      }
    </div>
  )
}

export default HeroCenter