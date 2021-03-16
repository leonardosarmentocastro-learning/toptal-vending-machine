exports.getChange = (M, P) => {
  let change = M - P;

  return [
    1,
    0.50,
    0.25,
    0.10,
    0.05,
    0.01,
  ].reduce((acc, coin) => {
    const result = Math.floor(change / coin, 2);
    change -= result * coin;
    change = change.toFixed(2);

    return [...acc, result];
  }, []).reverse();
};
