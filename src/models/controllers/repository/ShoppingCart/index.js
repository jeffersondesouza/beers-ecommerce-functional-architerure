import HttpMapper from "../../http-mapper/ShoppingCart";

const buy = () => ({
  requestOptions: {
    path: `https://api.punkapi.com/v2/beers?page=1&per_page=3`,
    method: "GET"
  },
  mapResponse: HttpMapper.fromLoadBeers
});

export default {
  buy
};
