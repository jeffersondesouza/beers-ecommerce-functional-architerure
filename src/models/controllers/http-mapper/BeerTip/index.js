import type { BeerTip } from "../../../types/BeerTip";

import parseSnackToCamelCaseObject from "../../../../utils/objectsArrays/parseSnackToCamelCaseObject";
import BeerTipFactory from "../../factory/BeerTip";

const fromLoadTip = (beersList): BeerTip => {
  const tip = beersList.map(parseSnackToCamelCaseObject)[0];

  return BeerTipFactory(tip);
};

export default {
  fromLoadTip
};
