import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../redux/slices/cartSlice";
import './singleNote.css'
function SingleNote({ products }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart)
  const curItem = cart.find(item => item.id == products.id)
  const currQuantity = curItem ? curItem.quantity : 0;
  return (
    <div className="singleNote">
      <img src={products.images[0]} alt={products.title} />
      <h2>{products.title}</h2>
      <h4>Price:-{products.price}</h4>
      <div className="cartLayout">
        <button onClick={()=>dispatch(removeToCart(products.id))}>-</button>
        <h4>{currQuantity}</h4>
        <button onClick={()=>dispatch(addToCart(products.id))}>+</button>
      </div>
    </div>
  );
}

export default SingleNote;
