import parseSnackToCamelCaseObject from "../../../../utils/objectsArrays/parseSnackToCamelCaseObject";
import BeerTip from "../../factory/BeerTip";


const fromLoadTip = beersList => {
  const tip = beersList.map(parseSnackToCamelCaseObject)[0];

  return BeerTip(tip);
};

export default {
  fromLoadTip
};
