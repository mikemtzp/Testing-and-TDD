const reverseString = require('./reversestring')

test('String is properly reversed', () => {
  expect(reverseString('hello')).toBe('olleh')
})
