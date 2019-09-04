// @flow
import type { HttpRequest } from "./../../../types/HttpRequest";
import type { LoginRequest } from "./../../../types/LoginRequest";

type LogoutRequest = {
  token: string
};

const login = (data: LoginRequest): HttpRequest => ({
  url: `https://api.punkapi.com/v2/beers/1`,
  method: "GET",
  data
});

const logout = (data: LogoutRequest): HttpRequest => ({
  url: `https://api.punkapi.com/v2/beers/1`,
  method: "GET",
  data
});

export default {
  login,
  logout
};
