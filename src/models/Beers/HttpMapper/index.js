import BeerModel from "../BeerModel";

import parseToCamelCaseObject from "../../../utils/objectsArrays/parseToCamelCaseObject";

const fromLoadBeers = serverData =>
  serverData.map(parseToCamelCaseObject).map(BeerModel);

const fromLoadBeer = beersList => {
  console.log('beersList:', beersList[0])
  // TODO: Aqui o Maybe mosstra-se interessante pois poderiamso fazer o map no objeto simples, 
  // e nao no array  
  return beersList.map(parseToCamelCaseObject).map(BeerModel)[0];
};

export default {
  fromLoadBeers,
  fromLoadBeer
};
