import User from "../../factory/User";

import parseSnackToCamelCaseObject from "../../../../utils/objectsArrays/parseSnackToCamelCaseObject";

const fromLoadBeers = serverData =>
  serverData.map(parseSnackToCamelCaseObject).map(User);

const fromLoadBeer = beersList => {
  // TODO: Aqui o Maybe mosstra-se interessante pois poderiamso fazer o map no objeto simples, 
  // e nao no array  
  return beersList.map(parseSnackToCamelCaseObject).map(User)[0];
};

export default {
  fromLoadBeers,
  fromLoadBeer
};
