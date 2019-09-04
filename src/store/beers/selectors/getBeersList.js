import Maybe from "../../utils/maybe";

export default state =>
  Maybe.of(state)
    .map(st => st.beers)
    .map(beers => beers.beersList)
    .get([]);
