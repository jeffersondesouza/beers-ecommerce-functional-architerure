import BeerMothModel from "../BeerTipModel";

import parseSnackToCamelCaseObject from "../../../../utils/objectsArrays/parseSnackToCamelCaseObject";

const fromLoadTip = beersList => {
  const tip = beersList.map(parseSnackToCamelCaseObject)[0];

  return BeerMothModel(tip);
};

export default {
  fromLoadTip
};
