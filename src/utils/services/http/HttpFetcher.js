// @flow

import type { HttpRequest } from "./../../../models/types/HttpRequest";

const mapHttpResponse = res => res.json();

const maybeMapper = httpMapper => {
  const defaulMapper = res => res;

  return httpMapper && typeof httpMapper === "function"
    ? httpMapper
    : defaulMapper;
};

const request = (requestOptions: HttpRequest, httpMapper: any): any =>
  fetch(requestOptions.url, requestOptions)
    .then(mapHttpResponse)
    .then(maybeMapper(httpMapper));

export default {
  request
};

// lembrando aqui o ideal é aogo do tipo maybeMapper(httoMapper)
/* const request = requestObject =>
  fetch(requestObject.requestOptions.path, requestObject.requestOptions)
    .then(mapHttpResponse)
    .then(maybeMapper(requestObject.mapResponse));
// lembrando aqui o ideal é aogo do tipo maybeMapper(httoMapper)
 */
