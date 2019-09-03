// @flow
export type HttpRequest = {
  requestOptions: {
    ...RequestOptions,
    url: string,
    method?: string,
    data?: Object
  },
  mapResponse: any => Object
};
