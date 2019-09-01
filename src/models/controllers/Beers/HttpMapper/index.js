// @flow
import type {Beer} from "../../../types/Beer";

import BeerFactory from "../BeerFactory";
import parseSnackToCamelCaseObject from "../../../../utils/objectsArrays/parseSnackToCamelCaseObject";

const fromLoadBeers = (serverData: any[]): Beer[] =>
  serverData.map(parseSnackToCamelCaseObject).map(BeerFactory);

const fromLoadBeer = (beersList: any): Beer => {
  // TODO: Aqui o Maybe mosstra-se interessante pois poderiamso fazer o map no objeto simples,
  // e nao no array
  return beersList.map(parseSnackToCamelCaseObject).map(BeerFactory)[0];
};

export default {
  fromLoadBeers,
  fromLoadBeer
};
