import beerActions from "./beers/actions";
import userActions from "./user/actions";

export default {
  beer: { ...beerActions },
  user: { ...userActions }
};
