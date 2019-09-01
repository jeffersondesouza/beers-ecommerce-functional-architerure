import HttpMapper from "../HttpMapper";

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
