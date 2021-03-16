const test = require('ava');

const { getChange } = require('./index');

test('must correctly return the amount of change in coin denominations', t => {
  [
    [5, 0.99, [1, 0, 0, 0, 0, 4]],
    [5, 0.95, [0, 1, 0, 0, 0, 4]],
    [5, 0.91, [4, 1, 0, 0, 0, 4]],
    [5, 0.50, [0, 0, 0, 0, 1, 4]],
    [5, 0.25, [0, 0, 0, 1, 1, 4]],
    [10, 1, [0, 0, 0, 0, 0, 9]],
  ].forEach(([M, P, result]) => {
    t.deepEqual(getChange(M, P), result);
  });
});
