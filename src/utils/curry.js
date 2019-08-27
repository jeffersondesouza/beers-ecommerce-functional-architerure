const curry = fn =>
  fn.length === 0 ? fn() : p => curry(fn.bind(null, p));

module.exports = {
  curry
};
