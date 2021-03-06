const Box = require('../lib/Box')
const { multiply, replace } = require('ramda')

// const moneyToFloat = str => {
//   return parseFloat(str.replace(/\$/g, ''))
// }

const moneyToFloat = str =>
  Box(str)
    .map(replace(/\$/g, ''))
    .map(parseFloat)

// const percentToFloat = str =>
//   const replaced = str.replace(/\$/g, '')
//   const number = parseFloat(replaced)
//   return number * 0.01

const percentToFloat = str =>
  Box(str)
    .map(replace(/\$/g, ''))
    .map(parseFloat)
    .map(multiply(0.01))

// const applyDiscount = (price, discount) => {
//   const cost = moneyToFloat(price)
//   const savings = percentToFloat(discount)
//   return cost - cost * savings
// }

const applyDiscount = (price, discount) =>
  moneyToFloat(price)
    .chain(cost =>
      percentToFloat(discount)
      .fold(savings =>
        cost - cost * savings))

describe('02', () => {
  it('should work', () => {
    const result = applyDiscount('$5.00', '20%')
    expect(result).toBe(4)
  })
})
