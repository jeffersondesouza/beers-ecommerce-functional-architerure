import HttpMapper from "../HttpMapper";

const load = () => ({
  requestOptions: {
    path: `https://api.punkapi.com/v2/beers/random`,
    method: "GET"
  },
  mapResponse: HttpMapper.fromLoadTip
});

export default {
  load
};
