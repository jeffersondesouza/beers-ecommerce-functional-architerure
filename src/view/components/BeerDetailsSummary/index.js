import React from "react";

import { Link } from "react-router-dom";

import "./styles.scss";

const BeerDetailsSummary = props => {
  const {
    name,
    tagline,
    firstBrewed,
    description,
    boilVolume,
    foodPairing,
    ingredients
  } = props;

  return (
    <div className="BeerDetailsSummary">
      <h2 className="BeerPage__name">{name}</h2>
      <p className="BeerPage__tagline">{tagline}</p>
      <p className="BeerPage__firstBrewed">Desde: {firstBrewed}</p>
      {/* TODO: criar um conversor do volume litres para litros */}
      <p className="BeerPage__boilVolume">
        Volume: {boilVolume.value} {boilVolume.unit}
      </p>
      <p className="BeerPage__description">Descrição: {description}</p>
      <div className="BeerPage__ingredients">
        <h4>Ingredientes</h4>
        {/* TODO: um conversor de Objeto para array pois igredeintes é um objeto */}
        <div>Malt: "Maris Otter Extra Pale",</div>
        <div>Quantidade: 3.3 kg</div>
      </div>
      <div className="BeerPage__foodPairing">
        <h4>Harmonização</h4>
        {foodPairing.map(item => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <footer className="BeerPage__footer">
        <button className="btn">Adicionar à Sacola</button>
        <Link to="/sacola" className="BeerPage__footer-link">
          Ver Items da sacola
        </Link>
      </footer>
    </div>
  );
};
export default BeerDetailsSummary;
