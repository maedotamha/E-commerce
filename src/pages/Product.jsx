import React from 'react'
import { useContext } from 'react'
import { BreadCrum } from '../components/Breadcrums/BreadCrum';
import { ProductDisplay } from '../components/PoductDisplay/ProductDisplay';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

export const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId) )
  return (
    <div>
      <BreadCrum product = {product}/>
      <ProductDisplay product = {product}/>
    </div>
  )
}
