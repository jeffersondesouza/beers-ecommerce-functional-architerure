import * as React from "react";
import { useState } from "react";

import Beer from "./Beer";
import BeerFilter from "./BeerFilter";

const Beers = props => {
  const { beersList, isLoadingBeers, onAddToCart } = props;

  const [filterQuery, setFilterQuery] = useState("");

  const handleFilterBeers = event => {
    setFilterQuery(event.target.value);
  };

  const filterByName = query => beer => {
    return beer.name.toLowerCase().includes(query.toLowerCase());
  };

  const renderBeer = item => (
    <Beer onAddToCart={onAddToCart(item)} key={item.id} {...item}/>
  );

  if (isLoadingBeers) {
    return <div className="Beers">Carregando...</div>;
  }

  return (
    <div className="Beers">
      <BeerFilter onFilterBeers={handleFilterBeers} />
      {beersList.filter(filterByName(filterQuery)).map(renderBeer)}
    </div>
  );
};

export default Beers;
