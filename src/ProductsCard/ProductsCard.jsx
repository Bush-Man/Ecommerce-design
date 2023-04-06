import React from 'react';
import ProductsCardItem from '../ProductsCardItem/ProductsCardItem';
import "./ProductsCard.css";
const ProductsCard = ({product}) => {
  return (
    <div className='productsCard'>
          <ProductsCardItem key={product._id} product={product}/>
    </div>
  )
}

export default ProductsCard