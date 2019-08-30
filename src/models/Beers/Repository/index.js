const loadBeers = page => ({
  path: `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`,
  method: "GET"
});

const loadBeer = page => ({
  path: `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`,
  method: "GET"
});

export default {
  loadBeers,
  loadBeer
};
