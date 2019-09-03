const login = page => ({
  requestOptions: {
    path: `https://api.punkapi.com/v2/beers/1`,
    method: "GET"
  }
});

const logout = page => ({
  requestOptions: {
    path: `https://api.punkapi.com/v2/beers/1`,
    method: "GET"
  }
});

export default {
  login,
  logout
};
