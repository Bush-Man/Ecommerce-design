import React from 'react'
import "./HorizontalCard.css"
import {ConstructionMaterialData} from "../../Data/ConstructionMaterialData.js"
import SingleProductCard from '../SingleProductCard/SingleProductCard'
const HorizontalCard = () => {

  return (
      <div className="horizontalCard">
          <h3>Buy On Offer Today</h3>
          <div className='horizontalCardContainer'> 
          {
              ConstructionMaterialData.map((product) => (
                  <SingleProductCard key={product._id} product={product}/>
                  ))
                }
        </div>
    </div>
   
  )
}

export default HorizontalCard