import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="imgHolder">
        <img src={props.items.picture} alt="list" />
      </div>
      <div className="price">
        <span>{props.items.category}</span>
        <span>{props.items.price}</span>
      </div>
    </div>
  );
}
export default Card;
