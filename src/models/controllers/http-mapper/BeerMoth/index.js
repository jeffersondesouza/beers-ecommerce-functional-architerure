import type { BeerMoth } from "../../../types/BeerMoth";
import BeerMothModel from "../../factory/BeerMoth";

import parseSnackToCamelCaseObject from "../../../../utils/objectsArrays/parseSnackToCamelCaseObject";

const fromLoadBeer = (beersList): BeerMoth => {
  const beer = beersList.map(parseSnackToCamelCaseObject)[0];
  return BeerMothModel(beer);
};

export default {
  fromLoadBeer
};
