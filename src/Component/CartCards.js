import React from "react";
import "./common.css";
import { useDispatch } from "react-redux";
import {remove, calculatePrice} from "../Redux/Slices/CartSlice"

const CartCards = (props) => {
  // console.log(props);

  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(props.value.id));
    dispatch(calculatePrice());
  }

  return (
    <div className="cartcards-cont">
      <h3>{props.value.title.split(" ").slice(0, 3).join(" ")}</h3>
      <img src={props.value.image} className="img" />
      <p>{props.value.description.split(" ").slice(0, 5).join(" ")}</p>
      <button className="btn" onClick={() => removeFromCart()}>
        delete Item
      </button>
    </div>
  );
};

export default CartCards;
