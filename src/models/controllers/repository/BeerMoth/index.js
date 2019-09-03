// @flow
import type { HttpRequest } from "./../../../types/HttpRequest";

const load = (): HttpRequest => ({
  url: `https://api.punkapi.com/v2/beers/random`,
  method: "GET"
});

export default {
  load
};
