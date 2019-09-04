import React from "react";

import "./styles.scss";

const BeerFilter = ({ onFilterBeers }) => (
  <div className="BeerFilter">
    <input
      onKeyUp={onFilterBeers}
      className="BeerFilter__input"
      placeholder="Buscar por nome"
    />
  </div>
);

export default BeerFilter;
