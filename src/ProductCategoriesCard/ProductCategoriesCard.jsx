import React from 'react'
import "./ProductCategoriesCard.css";
import ProductCategoriesCardItem from '../ProductCategoriesCardItem/ProductCategoriesCardItem';
const ProductCategoriesCard = ({item}) => {
  return (
      <div className='productCategoriesCard'>
    <ProductCategoriesCardItem key={item._id} item={item}/>
    </div>
  )
}

export default ProductCategoriesCard