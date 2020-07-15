const {sum, prod, sub, division} = require('./math_function');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('prod 1 * 2 to equal 2', () => {
    expect(prod(1, 2)).toBe(2);
});

test('sub 2 - 1 to equal 1', () => {
    expect(sub(2, 1)).toBe(1);
});

test('division 4 / 2 to equal 2', () => {
    expect(division(4, 2)).toBe(2);
});
