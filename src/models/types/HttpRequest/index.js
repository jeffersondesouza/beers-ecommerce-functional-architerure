// @flow
export type HttpRequest = {
  requestOptions: {
    ...RequestOptions,
    path: string,
    method: string,
    data?: Object
  },
  mapResponse: any => Object
};
