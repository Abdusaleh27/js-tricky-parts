function curriedAdd(num) {
  if (num === undefined) return 0;
  return function add(n) {
    if (n === undefined) return num;
    num += n;
    return add;
  };
}

module.exports = { curriedAdd };
