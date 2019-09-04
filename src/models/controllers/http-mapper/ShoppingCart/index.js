import parseSnackToCamelCaseObject from "../../../../utils/objectsArrays/parseSnackToCamelCaseObject";
import ShoppingCart from "../../factory/ShoppingCart";

const fromLoadShoppingCart = serverData =>
  serverData.map(parseSnackToCamelCaseObject).map(ShoppingCart);

export default {
  fromLoadShoppingCart
};
