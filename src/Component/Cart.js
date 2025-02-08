import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./common.css";
import { useDispatch, useSelector } from "react-redux";
import CartCards from "./CartCards";
import { calculatePrice } from "../Redux/Slices/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.value);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  // console.log(cartItems);

  useEffect(() => {
    dispatch(calculatePrice());
  }, []);

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
            <p>total price: {totalPrice}</p>
            <br />
            <button className="btn">proceed to checkout</button>
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
