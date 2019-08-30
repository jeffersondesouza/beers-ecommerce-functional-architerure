import HttpMapper from "./../HttpMapper";

const loadBeers = page => ({
  requestOptions: {
    path: `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`,
    method: "GET"
  },
  mapResponse: HttpMapper.fromLoadBeers
});

const loadBeer = id => ({
  requestOptions: {
    path: `https://api.punkapi.com/v2/beers/${id}`,
    method: "GET"
  }
});

export default {
  loadBeers,
  loadBeer
};
