import React from 'react'
import './ProductCategoriesCardItem.css';
import {Link} from 'react-router-dom'
const ProductCategoriesCardItem = ({item}) => {
  return (
    <Link className='links catItem' to='/product/:id'>
          <img src={item.image} alt="" />
    </Link>
  )
}

export default ProductCategoriesCardItem