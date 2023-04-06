//import React, { useEffect } from 'react';
import "./HeroSection.css";
import { useState } from 'react';
import GlassMorphism from '../../SpecialStyles/GlassMorphism/GlassMorphism';
import Men from '../../Clothes/Men/Men';
import Women from '../../Clothes/Women/Women';
import Children from '../../Clothes/Children/Children';
import HeroCenter from "../HeroCenter/HeroCenter";
const HeroSection = () => {
    const [cat, setCat] = useState(Men);
    const[select,setSelect] = useState("men")
    return (
      <div className='heroSection'>
            
            <div className='hero'>
                <GlassMorphism />
                <div className="heroLeft">
                    <div>
                        <h4 style={{marginBottom:"5px"}}>Categories</h4>
                    </div>
                    <div className='horizontal'>
                        <span  style={{color:select==="men"?"navy":"black"}}  onClick={() => { setCat(Men); setSelect("men")}}>Men</span>
                        <span style={{color:select==="women"?"navy":"black"}}    onClick={()=>{setCat(Women); setSelect("women")}}>Ladies</span>
                        <span style={{color:select==="child"?"navy":"black"}}    onClick={()=>{setCat(Children); setSelect("child")}}>Children</span>
                    </div>
                    <div className="leftBody">{cat}</div>
                </div>
                <div className="heroCenter">
                    <HeroCenter />
                </div>
                <div className="heroRight">
                    Right
                </div>
            </div>
      </div>
  )
}

export default HeroSection