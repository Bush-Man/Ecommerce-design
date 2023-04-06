import React from 'react'

import GardenSuppliesCategory from '../../Categories/GardenSuppliesCategory/GardenSuppliesCategory';
import HouseElectronicsCategory from '../../Categories/HouseElectronicsCategory/HouseElectronicsCategory';
import HouseFurnitureCategory from '../../Categories/HouseFurnitureCategory/HouseFurnitureCategory';
import HouseImprovement from '../../Categories/HouseImprovementCategory/HouseImprovement';
import ProductsCard from '../../ProductsCard/ProductsCard';
import ConstructionCategory from '../ConstructionCategory/ConstructionCategory';
//import LandParcelCategory from '../../Categories/LandParcelsCategory/LandParcelCategory';
import { HouseFurnitureData } from '../../Data/HouseFurniture.js';
import { CategoryCardData } from '../../Data/ProductsCatCardData';
import "./BodySection.css";
import ProductCategoriesCard from '../../ProductCategoriesCard/ProductCategoriesCard';
import HorizontalCard from '../HorizontalCard/HorizontalCard';
const BodySection = () => {
  return (
    <div className='bodySection'>
    
      <div className='catContainerDiv'>
         
        <div className='catContainerDivLeft'>
          
        <div className='catCardParent'>
        {
          CategoryCardData.map(item =>
            <ProductCategoriesCard key={item._id} item={item} />
            )
          }
        </div>
        <div className='catCardParent'>
        {
          CategoryCardData.map(item =>
            <ProductCategoriesCard key={item._id} item={item} />
            )
          }
          </div>
          <div className='catCardParent'>
        {
          CategoryCardData.map(item =>
            <ProductCategoriesCard key={item._id} item={item} />
            )
          }
          </div>
          <div className='catCardParent'>
        {
          CategoryCardData.map(item =>
            <ProductCategoriesCard key={item._id} item={item} />
            )
          }
        </div>
        
      
        </div>
        <div className='catContainerDivRight'>
          hello
        </div>
      </div>
      <div className='productsContainerDiv'>
         <h3>Products for you</h3>
      <div className="productsCardParent">
        
        {HouseFurnitureData.map(product =>
        <ProductsCard key={product._id} product={product} />
        )}
      
      </div>
      </div>
      <div>
        <HorizontalCard />
      </div>
      <div className='productsContainerDiv'>
         <h3>House Improvement</h3>
      <div className="productsCardParent">
        
        {HouseFurnitureData.map(product =>
        <ProductsCard key={product._id} product={product} />
        )}
      
      </div>
      </div>
      <div>
        <HorizontalCard />
      </div>
      <div>
        <HorizontalCard />
      </div>
      <div className='productsContainerDiv'>
         <h3>House Improvement</h3>
      <div className="productsCardParent">
        
        {HouseFurnitureData.slice(1,6).map(product =>
        <ProductsCard key={product._id} product={product} />
        )}
      
      </div>
      </div>
      {/*
      <div>

      <ConstructionCategory />
        </div>
         <div>
      <HouseImprovement/>

      </div>
      <div>

      <HouseElectronicsCategory/>
      </div>
      <div>

      <GardenSuppliesCategory/>
      </div>
      <div>

      <HouseFurnitureCategory />
      </div>
      
        */
      }
     
    </div>
  )
}

export default BodySection