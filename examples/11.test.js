const LazyBox = require('../lib/LazyBox')
const { trim, inc, toLower } = require('ramda')

const nextCharForNumberString = str => 
  LazyBox(() => str) // a fn inside
  .map(trim)
  .map(parseInt)
  .map(inc)
  .map(String.fromCharCode)
  .fold(toLower) // lazy until fold


describe('11', () => {
  it('should work', () => {
    const result = nextCharForNumberString('  64  ')
    expect(result).toBe('a')
  })
})
