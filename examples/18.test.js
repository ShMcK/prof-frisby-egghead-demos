const Box = require('../lib/Box')
const { liftA2 } = require('../lib/Lift')
const { identity } = require('ramda')

const add = x => y => x + y

liftA2(add, Box(2), Box(4))
// Box(6)

describe('18', () => {
  it('should work', () => {
    const result = Box(x => x + 1).ap(Box(2))
    expect(result.fold(identity)).toBe(3)
  })

  it('should apply two boxes', () => {
    const result = Box(add)
      .ap(Box(1))
      .ap(Box(2))
    const expected = 3
    expect(result.fold(identity)).toBe(expected)
  })

  it('should apply two boxes with liftA2', () => {
    const result = liftA2(add, Box(1), Box(2))
    const expected = 3
    expect(result.fold(identity)).toBe(expected)
  })
})