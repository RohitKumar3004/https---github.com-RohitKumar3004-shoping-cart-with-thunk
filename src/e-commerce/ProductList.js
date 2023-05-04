import React, { useEffect } from 'react'
import { fetchData } from '../redux/slices/productSlice';
import {useDispatch, useSelector}from 'react-redux'
import SingleNote from './SingleNote';
import './productList.css'
function ProductList() {
  const dispatch = useDispatch();
  const products=useSelector(state=>state.productReducer.products)
  useEffect(()=>{
    dispatch(fetchData());
  }, [])
  
  
  return (
    <div className='main'>
      {products.map(item => <SingleNote key={item.id} products={item} />)}
    </div>
  )
}

export default ProductList