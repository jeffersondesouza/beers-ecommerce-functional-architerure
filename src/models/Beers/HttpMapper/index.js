import BeerModel from "../BeerModel";

import parseToCamelCaseObject from "../../../utils/objectsArrays/parseToCamelCaseObject";

const fromLoadBeers = serverData => {
  console.log("serverData:", serverData);

  return serverData.map(parseToCamelCaseObject).map(item => {
    console.log("item:", item);

    return BeerModel(item);
  });
};

export default {
  fromLoadBeers
};
