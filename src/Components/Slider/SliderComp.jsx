import React from "react";
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
import "./SliderComp.css"

const SliderComp = ({children})=> {
  
  const settings = {
    dots:false,
    infinite: true,
    slidesToShow:6,
    slidesToScroll:6,
    autoplay: false,
  }
  return (
     <div className="sliderComp">
      <div className="sliderContainer">
        <Slider {...settings} className="sliderC" >
        
        {children}
      
        </Slider>
         </div>
         </div>
      
    );
}
  export default SliderComp
