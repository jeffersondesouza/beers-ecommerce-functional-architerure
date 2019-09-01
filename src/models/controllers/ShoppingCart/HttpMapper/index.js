import Repository from "../../Beers/Repository";

import parseSnackToCamelCaseObject from "../../../../utils/objectsArrays/parseSnackToCamelCaseObject";

const fromLoadShoppingCart = serverData =>
  serverData.map(parseSnackToCamelCaseObject).map(Repository);

export default {
  fromLoadShoppingCart
};
