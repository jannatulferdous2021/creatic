import React from "react";
import "./Cart.css";
import UseCart from "./../../Hooks/useCart/UseCart";

const Cart = (props) => {
  const { cartItem } = props;
  return (
    <div className="mb-3 d-flex align-items-center justify-content-evenly">
      <div className="img">
        <img src={cartItem.img} alt="" />
      </div>
      <div className="cart">
        <h5> Product Name: {cartItem.name}</h5>
        <p> Product Price: {cartItem.price}</p>
      </div>
    </div>
  );
};

export default Cart;
