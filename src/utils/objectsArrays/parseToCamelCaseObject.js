import lowerCamelCaseWord from "./lowerCamelCaseWord";

const getSnackeKeysFrom = obj => Object.getOwnPropertyNames(obj);

const keysValuesToCamelCaseObject = originalObj => (newObj, key) => {
  const camelKey = lowerCamelCaseWord(key);
  const value = originalObj[key];
  return { ...newObj, [camelKey]: value };
};

export default obj =>
  getSnackeKeysFrom(obj).reduce(keysValuesToCamelCaseObject(obj), {});
