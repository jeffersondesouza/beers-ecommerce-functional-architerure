import React from "react";

const Product = props => {
  const { name, tagline, abv } = props;

  return (
    <div className="Product">
      <div className="Product__summary">
        <p className="Product__summary-name">{name}</p>
        <p className="Product__summary-tagline">{tagline}</p>
        <p className="Product__summary-abv">Teor: {abv}</p>
        <footer className="Product__footer">Quantidade: {2}</footer>
      </div>
      <div className="Product__actions">
        <button className="btn-round">-</button>
        <button className="btn-round">+</button>
        <button className="btn-round btn-remove Product__actions-remove">
          X
        </button>
      </div>
    </div>
  );
};

export default Product;
