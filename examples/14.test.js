const Box = require('../lib/Box')
// const Task = require('data.task')
// const { Right, Left, fromNullable } = require('../lib/Either')
// const { List, Map } = require('immutable-ext')
const { toUpper, identity } = require('ramda')

// functor
// 1. fx.map(f).map(g) === fx.map(x => g(f(x)))
// 2. fx.map(id) === id(fx)

describe('14', () => {
  it('should be a functor', () => {
    const res1 = Box('squirrels')
      .map(s => s.substr(5))
      .map(toUpper)
      .fold(identity)

    const res2 = Box('squirrels')
      .map(s => s.substr(5).toUpperCase())
      .fold(identity)

    expect(res1).toBe(res2)
  })

	it('should match identity', () => {
    const result = Box('crayons').map(identity)
    const expected = identity(Box('crayons'))
    expect(result.fold(identity)).toEqual(expected.fold(identity))
  })  

})