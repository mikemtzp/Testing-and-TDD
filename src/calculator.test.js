const Calculator = require('./calculator')

describe('add', () => {
  test('Adds 2  + 2', () => {
    expect(Calculator.add(2, 2)).toBe(4)
  })

  test('Ads 10 + 10', () => {
    expect(Calculator.add(10, 10)).toBe(20)
  })

  test('Ads 1760 + 234', () => {
    expect(Calculator.add(1760, 234)).toBe(1994)
  })

  test('Ads 10,764 + 5,467', () => {
    expect(Calculator.add(10764, 5467)).toBe(16231)
  })
})

describe('substract', () => {
  test('Subtracts 2 - 2', () => {
    expect(Calculator.subtract(2, 2)).toBe(0)
  })

  test('Subtracts 10 - 8', () => {
    expect(Calculator.subtract(10, 8)).toBe(2)
  })

  test('Subtracts 1760 - 234', () => {
    expect(Calculator.subtract(1760, 234)).toBe(1526)
  })

  test('Subtracts 10,764 - 5,467', () => {
    expect(Calculator.subtract(10764, 5467)).toBe(5297)
  })
})

describe('multiply', () => {
  test('multiply 2 * 2', () => {
    expect(Calculator.multiply(2, 2)).toBe(4)
  })

  test('multiply 10 * 8', () => {
    expect(Calculator.multiply(10, 8)).toBe(80)
  })

  test('multiply 1760 * 234', () => {
    expect(Calculator.multiply(1760, 234)).toBe(411840)
  })

  test('multiply 10,764 * 5,467', () => {
    expect(Calculator.multiply(10764, 5467)).toBe(58846788)
  })
})

describe('divide', () => {
  test('divide 4 / 2', () => {
    expect(Calculator.divide(4, 2)).toEqual(2)
  })

  test('divide 10 / 8', () => {
    expect(Calculator.divide(10, 8)).toEqual(expect.closeTo(1.25))
  })

  test('divide 1760 / 234', () => {
    expect(Calculator.divide(1760, 234)).toBeCloseTo(7.52, 1)
  })

  test('divide 10,764 / 5,467', () => {
    expect(Calculator.divide(10764, 5467)).toBeCloseTo(1.96, 1)
  })
})