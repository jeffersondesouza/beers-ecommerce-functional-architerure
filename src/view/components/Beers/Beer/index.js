import React from "react";
import { Link } from "react-router-dom";
import BeerFooter from "./BeerFooter";

import "./styles.scss";
import BeerImage from "./BeerImage";

const Beer = props => {
  const { id, abv, name, imageUrl, tagline, onAddToCart } = props;

  return (
    <div className="Beer">
      <div className="Beer__add">
        <button onClick={onAddToCart} className="btn-round">
          +
        </button>
      </div>
      <Link to={`/cervejas/${id}`}>
        <BeerImage imageUrl={imageUrl} name={name} />
        <BeerFooter abv={abv} name={name} tagline={tagline} />
      </Link>
    </div>
  );
};

export default Beer;
