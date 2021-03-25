import React from "react";
import "../product-menu/product-menu.css";

const ProductMenu = ({ menu }) => {
  const { title, imgUrl } = menu;
  return (
    <div className="product-menu">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="content">
        <h3 className="title">{title.toUpperCase()}</h3>
        <span className="subtitle">BUY NOW</span>
      </div>
    </div>
  );
};
export default ProductMenu;
