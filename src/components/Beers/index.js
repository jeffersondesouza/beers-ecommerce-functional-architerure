import React, { useState } from "react";

import "./styles.scss";
import Beer from "./Beer";
// (https://api.punkapi.com/v2/beers?page=1&per_page=10)
const Beers = props => {
  const [filterQuery, setFilterQuery] = useState("");

  const { beersList } = props;

  const handleFilterBeers = event => {
    setFilterQuery(event.target.value);
  };

  const filterBy = query => beer =>
    beer.name.toLowerCase().includes(query.toLowerCase());

  return (
    <div className="Beers">
      <div className="Beers__filter">
        <input
          onKeyUp={handleFilterBeers}
          className="Beers__filter-input"
          placeholder="Buscar por nome"
        />
      </div>
      {beersList.filter(filterBy(filterQuery)).map(item => (
        <Beer {...item} />
      ))}
    </div>
  );
};

export default Beers;
