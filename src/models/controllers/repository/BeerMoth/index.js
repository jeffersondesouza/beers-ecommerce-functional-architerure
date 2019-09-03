import HttpMapper from "../../http-mapper/BeerMoth";

const load = () => ({
  requestOptions: {
    path: `https://api.punkapi.com/v2/beers/random`,
    method: "GET"
  },
  mapResponse: HttpMapper.fromLoadBeer
});

export default {
  load
};
