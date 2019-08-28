import React from "react";
import { Link } from "react-router-dom";

const Beer = props => {
  const { id, abv, name, imageUrl, tagline } = props;

  return (
    <div className="Beer">
      <div className="Beer__add">
        <button className="btn-round">+</button>
      </div>
      <Link to={`/cervejas/${id}`}>
        <picture className="Beer__picture">
          <img
            className="Beer__img"
            src={imageUrl}
            alt={`Uma foto da cerveja ${name}`}
          />
        </picture>
        <footer>
          <p className="Beer__name">{name}</p>
          <div className="Beer__tagline">{tagline}</div>
          <div className="Beer__abv">Teor: {abv}</div>
        </footer>
      </Link>
    </div>
  );
};

export default Beer;
