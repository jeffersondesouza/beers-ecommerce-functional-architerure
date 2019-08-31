import BeerModel from "../BeerModel";

import parseSnackToCamelCaseObject from "../../../utils/objectsArrays/parseSnackToCamelCaseObject";

const fromLoadShoppingCart = serverData =>
  serverData.map(parseSnackToCamelCaseObject).map(BeerModel);

export default {
  fromLoadShoppingCart
};
