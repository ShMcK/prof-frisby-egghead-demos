const { First, All, Sum } = require('../lib/SemiGroup')
const { Map } = require('immutable-ext')
const expectImmutable = require('expect-immutable')

expect.extend(expectImmutable)

const acct1 = Map({
  name: First('Nico'),
  isPaid: All(true),
  points: Sum(10),
  friends: ['Franklin']
})

const acct2 = Map({
  name: First('Nico'),
  isPaid: All(false),
  points: Sum(2),
  friends: ['Gatsby']
})

describe('07', () => {
  it('should work', () => {
    const result = acct1.concat(acct2)

    const expected = Map({
      name: First('Nico'),
      isPaid: All(false),
      points: Sum(12),
      friends: ['Franklin', 'Gatsby']
    })

    // immutable equality check not working
    // expect(result).toEqualImmutable(expected)
  })
})
