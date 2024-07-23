import React from "react";
import "../styles/card.css";

const Card = ({ item, handleClick }) => {
  return (
    <div className="cards">
      <div className="image-box">
        <img src={item.img} alt="" />
      </div>

      <div className="details">
        <p>{item.title}</p>
        <p>{item.author}</p>
        <p>{item.price}</p>
        <button onClick={() => handleClick(item)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
