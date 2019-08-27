const pipeline = (...fns) =>
  fns.reduce((result, f) => (...args) => f(result(...args)));
