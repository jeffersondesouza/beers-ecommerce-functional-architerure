import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const BeerOfMonth = props => {
  const { id, name, imageUrl, abv } = props;

  return (
    <div className="BeerOfMonth">
      <p className="BeerOfMonth__name">{name}</p>
      <picture className="BeerOfMonth__picture">
        <img
          className="BeerOfMonth__img"
          src={imageUrl}
          alt={`Uma foto da cerveja ${name}`}
        />
      </picture>
      <footer>
        <div className="BeerOfMonth__abv">Teor: {abv}</div>
        <div className="BeerOfMonth__link-wrap">
          <Link className="BeerOfMonth__link" to={`/cervejas/${id}`}>
            Detalhes
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default BeerOfMonth;
