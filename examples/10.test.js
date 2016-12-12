const { Map, List } = require('immutable-ext')
const { Sum } = require('../lib/Monoid')

describe('08', () => {
  it('should total the nums', () => {
    const result = List.of(1, 2, 3)
      .foldMap(Sum, Sum.empty())
      .fold(x => x)
    expect(result).toBe(6)
  })
})