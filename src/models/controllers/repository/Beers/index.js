// @flow
import type { HttpRequest } from "./../../../types/HttpRequest";

const loadBeers = (page: number): HttpRequest => ({
  url: `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`,
  method: "GET"
});

const loadBeer = (id: number): HttpRequest => ({
  url: `https://api.punkapi.com/v2/beers/${id}`,
  method: "GET"
});

export default {
  loadBeers,
  loadBeer
};
