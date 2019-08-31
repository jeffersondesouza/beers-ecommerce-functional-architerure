import beerActions from "./beers/actions";
import userActions from "./user/actions";
import shoppingCartActions from "./shoppingCart/actions";

export default {
  beer: { ...beerActions },
  user: { ...userActions },
  shoppingCart: { ...shoppingCartActions }
};
