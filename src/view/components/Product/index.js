import React from "react";

import "./styles.scss";

const Product = props => {
  const {
    id,
    name,
    tagline,
    abv,
    imageUrl,
    quantity,
    onIncreaseProduct,
    onRemoveProduct
  } = props;
  console.log("props:", props);

  return (
    <div className="Product">
      <picture className="Product__picture">
        <img className="Product__img" src={imageUrl} alt={name} />
      </picture>
      <div className="Product__summary">
        <p className="Product__summary-name">{name}</p>
        <p className="Product__summary-tagline">{tagline}</p>
        <p className="Product__summary-abv">Teor: {abv}</p>
        <footer className="Product__footer">Quantidade: {quantity}</footer>
      </div>
      <div className="Product__actions">
        <button className="btn-round">-</button>
        <button onClick={onIncreaseProduct} className="btn-round">
          +
        </button>
        <button
          onClick={onRemoveProduct(id)}
          className="btn-round btn-remove Product__actions-remove"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Product;
