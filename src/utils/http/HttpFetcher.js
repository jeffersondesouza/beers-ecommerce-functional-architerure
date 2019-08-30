const mapHttpResponse = res => res.json();

const maybeMapper = httpMapper => {
  console.log("httpMapper:", typeof httpMapper);
  const defaulMapper = res => res;

  return httpMapper && typeof httpMapper === "function"
    ? httpMapper
    : defaulMapper;
};

const request = (requestObject, httpMapper) =>
  fetch(requestObject.path, requestObject)
    .then(mapHttpResponse)
    .then(maybeMapper(httpMapper)); // lembrando aqui o ideal é aogo do tipo maybeMapper(httoMapper)

export default {
  request
};
