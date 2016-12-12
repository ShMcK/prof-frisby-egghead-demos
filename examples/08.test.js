const { Sum } = require('../lib/SemiGroup')

// safe operation, if none returns 0
const total = xs =>
  xs.reduce((acc, x) => acc + x, 0)

describe('08', () => {
  it('should total the nums', () => {
    const result = total([1, 2, 3])
    expect(result).toBe(6)
  })
})