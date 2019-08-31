import BeerModel from "../UserModel";

import parseSnackToCamelCaseObject from "../../../utils/objectsArrays/parseSnackToCamelCaseObject";

const fromLoadBeers = serverData =>
  serverData.map(parseSnackToCamelCaseObject).map(BeerModel);

const fromLoadBeer = beersList => {
  console.log('beersList:', beersList[0])
  // TODO: Aqui o Maybe mosstra-se interessante pois poderiamso fazer o map no objeto simples, 
  // e nao no array  
  return beersList.map(parseSnackToCamelCaseObject).map(BeerModel)[0];
};

export default {
  fromLoadBeers,
  fromLoadBeer
};
