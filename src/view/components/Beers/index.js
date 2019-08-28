import React, { useState } from "react";

import Beer from "./Beer";
import BeerFilter from "./BeerFilter";

// (https://api.punkapi.com/v2/beers?page=1&per_page=10)

const Beers = props => {
  const [filterQuery, setFilterQuery] = useState("");

  const { beersList } = props;

  const handleFilterBeers = event => {
    setFilterQuery(event.target.value);
  };

  const filterByName = query => beer => {
    return beer.name.toLowerCase().includes(query.toLowerCase());
  };

  const renderBeer = item => <Beer key={item.id} {...item} />;

  return (
    <div className="Beers">
      <BeerFilter onFilterBeers={handleFilterBeers} />
      {beersList.filter(filterByName(filterQuery)).map(renderBeer)}
    </div>
  );
};

export default Beers;
