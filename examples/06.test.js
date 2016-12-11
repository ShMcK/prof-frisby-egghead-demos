const { Sum, All, First } = require('../lib/SemiGroup')

describe('06', () => {
  it('should concat together', () => {
    const result = Sum(1)
      .concat(Sum(2))
      .fold(x => x)
    expect(result).toEqual(3)
  })

  it('should check if all are true', () => {
    const result = All(true)
      .concat(All(false))
      .fold(x => x)
    expect(result).toBe(false)
  })

  it('should check if first', () => {
    const result = First('blah')
      .concat(First('ice'))
      .fold(x => x)
    expect(result).toBe('blah')
  })
})