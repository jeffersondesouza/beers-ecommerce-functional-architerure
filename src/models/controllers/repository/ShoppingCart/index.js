// @flow
import type { HttpRequest } from "./../../../types/HttpRequest";

const buy = (): HttpRequest => ({
  url: `https://api.punkapi.com/v2/beers?page=1&per_page=3`,
  method: "GET"
});

export default {
  buy
};
