const LazyBox = require('../lib/LazyBox')

const nextCharForNumberString = str => 
  LazyBox(() => str) // a fn inside
  .map(s => s.trim())
  .map(s => new Number(s))
  .map(n => n + 1)
  .map(n => String.fromCharCode(n))
  .fold(s => s.toLowerCase()) // lazy until fold


describe('11', () => {
  it('should work', () => {
    const result = nextCharForNumberString('  64  ')
    expect(result).toBe('a')
  })
})
