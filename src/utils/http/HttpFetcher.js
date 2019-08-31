const mapHttpResponse = res => res.json();

const maybeMapper = httpMapper => {
  const defaulMapper = res => res;

  return httpMapper && typeof httpMapper === "function"
    ? httpMapper
    : defaulMapper;
};

const request = ({ requestOptions, mapResponse }) =>
  fetch(requestOptions.path, requestOptions)
    .then(mapHttpResponse)
    .then(maybeMapper(mapResponse));

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
