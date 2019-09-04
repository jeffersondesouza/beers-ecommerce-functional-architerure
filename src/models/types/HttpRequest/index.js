// @flow
export type HttpRequest = {
    ...RequestOptions,
    url: string,
    method?: string,
    data?: Object
};
