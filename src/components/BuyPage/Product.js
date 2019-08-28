import React from "react";

const Product = () => {
  return (
    <div className="Product">
      <div className="Product__sumary">Product</div>
      <div className="Product__actions">
        <button className="btn-round">-</button>
        <button className="btn-round">+</button>
        <button className="btn-round btn-remove Product__actions-remove">X</button>
      </div>
    </div>
  );
};

export default Product;
