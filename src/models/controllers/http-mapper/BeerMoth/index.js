import BeerMothModel from "../../factory/BeerMoth";
import parseSnackToCamelCaseObject from "../../../../utils/objectsArrays/parseSnackToCamelCaseObject";


const fromLoadBeer = beersList => {
  console.log('beersList:', beersList)
  const beer = beersList.map(parseSnackToCamelCaseObject)[0];

  return BeerMothModel(beer);
};

export default {
  fromLoadBeer
};
