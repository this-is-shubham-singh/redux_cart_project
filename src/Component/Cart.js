import React from "react";
import { NavLink } from "react-router-dom";
import "./common.css";
import { useSelector } from "react-redux";
import CartCards from "./CartCards";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.value);

  // console.log(cartItems);

  // ADDING TWO PARTS OF CART PAGE 

  return (
    <div>
      {cartItems.length > 0 ? (
        <div className="cart-cont">
          <div className="cart-left">
            {cartItems.map((value, index) => {
              return <CartCards key={index} value={value} />;
            })}
          </div>

          <div className="cart-right">
            <p>total price: </p>
            <br />
            <button>proceed to checkout</button>
          </div>
        </div>
      ) : (
        <div>
          <h2>No items in cart</h2>
          <NavLink to="/">
            <button className="btn">Go to Home page</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
