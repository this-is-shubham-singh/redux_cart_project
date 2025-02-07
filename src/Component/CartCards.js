import React from "react";
import "./common.css";

const CartCards = (props) => {
  console.log(props);
  return (
    <div className="cartcards-cont">
      <h3>{props.value.title.split(" ").slice(0, 3).join(" ")}</h3>
      <img src={props.value.image} className="img" />
      <p>{props.value.description.split(" ").slice(0, 5).join(" ")}</p>
      <button className="btn">delete Item</button>
    </div>
  );
};

export default CartCards;
