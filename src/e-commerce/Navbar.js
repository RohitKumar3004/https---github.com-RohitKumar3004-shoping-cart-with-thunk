import React from "react";
import "./Navbar.css";
import { ImCart } from "react-icons/im";
import { useSelector } from "react-redux";
function Navbar() {
  const cart = useSelector((state) => state.cartReducer.cart);
  let count = 0;
  cart.forEach((item) => (count += item.quantity));
  return (
    <nav>
      <div className="top">
        <h2 className="banner">My Store</h2>
        <div className="rightSide">
          <ImCart />
          <h4>{count}</h4>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
