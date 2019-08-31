import BeerMothModel from "../BeerMothModel";

import parseSnackToCamelCaseObject from "../../../utils/objectsArrays/parseSnackToCamelCaseObject";

const fromLoadBeer = beersList => {
  const beer = beersList.map(parseSnackToCamelCaseObject)[0];

  return BeerMothModel(beer);
};

export default {
  fromLoadBeer
};
