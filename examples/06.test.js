const { Sum, All, First } = require('../lib/SemiGroup')
const { identity } = require('ramda')

describe('06', () => {
  it('should concat together', () => {
    const result = Sum(1)
      .concat(Sum(2))
      .fold(identity)
    expect(result).toEqual(3)
  })

  it('should check if all are true', () => {
    const result = All(true)
      .concat(All(false))
      .fold(identity)
    expect(result).toBe(false)
  })

  it('should check if first', () => {
    const result = First('blah')
      .concat(First('ice'))
      .fold(identity)
    expect(result).toBe('blah')
  })
})