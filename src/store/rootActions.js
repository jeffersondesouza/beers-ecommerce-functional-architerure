import beerActions from "./beers/actions";
import userActions from "./user/actions";
import shoppingCartActions from "./shoppingCart/actions";
import dashboardActions from "./dashboard/actions";

export default {
  beer: { ...beerActions },
  user: { ...userActions },
  shoppingCart: { ...shoppingCartActions },
  dashboard: dashboardActions
};
