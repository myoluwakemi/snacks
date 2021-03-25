import React from "react";
import "./productCollection.css"
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";

import { addItem } from  "../../redux/cart/cart.action"


const ProductCollection = ({ items, addItem }) => {
  const { picture, name, price } = items;
  return (
    <div className="product-collection">
      <div className="image" style={{ backgroundImage: `url(${picture})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>

      </div>
      <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
  );
};
const mapDispatchToProps = dispatch =>({
  addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(ProductCollection)
