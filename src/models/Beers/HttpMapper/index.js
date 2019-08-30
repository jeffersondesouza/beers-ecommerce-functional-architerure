import parseToCamelCaseObject from "../../../utils/objectsArrays/parseToCamelCaseObject";

const fromLoadBeers = serverData => {
  console.log("serverData:", serverData);

  return serverData.map(item => parseToCamelCaseObject(item));
};

export default {
  fromLoadBeers
};
