// @flow

import type { HttpRequest } from "./../../../types/HttpRequest";

import HttpMapper from "./../HttpMapper";

const loadBeers = (page: number): HttpRequest => ({
  requestOptions: {
    url: `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`,
    method: "GET"
  },
  mapResponse: HttpMapper.fromLoadBeers
});

const loadBeer = (id: number): HttpRequest => ({
  requestOptions: {
    url: `https://api.punkapi.com/v2/beers/${id}`,
    method: "GET"
  },
  mapResponse: HttpMapper.fromLoadBeer
});

export default {
  loadBeers,
  loadBeer
};
