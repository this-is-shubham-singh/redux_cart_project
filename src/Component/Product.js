import React from "react";
import "./common.css";
import { useDispatch } from "react-redux";
import { add, remove } from "../Redux/Slices/CartSlice";

const Product = (props) => {
  //   console.log(props.value);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add( props.value));
  };

  const removeFromCart = () => {
    dispatch(remove(), props.value.id);
  };

  return (
    <div className="card-cont">
      <h2>{props.value.title.split(" ").slice(0, 2).join(" ")}</h2>
      <p>{props.value.description.split(" ").slice(0, 7).join(" ")}</p>
      <img src={props.value.image} className="img" />
      <div>
        <h3>{props.value.price}</h3>
        <button className="btn" onClick={() => addToCart()}>
          add to cart
        </button>
        <button className="btn" onClick={() => removeFromCart()}>
          remove from cart
        </button>
      </div>
    </div>
  );
};

export default Product;
