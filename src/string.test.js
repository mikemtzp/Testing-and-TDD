const stringLength = require("./string");

test('Return number of characters', () => {
  expect('hello').toHaveLength(5)
});

test('String lenght must be equal or higher than 1 and less or equal to 10', () => {
  const string = 'hello';
  expect(string.length >= 1).toBeTruthy()
  expect(string.length <= 10).toBeTruthy()
})
