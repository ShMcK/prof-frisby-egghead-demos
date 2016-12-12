// const nextCharForNumberString = str => {
//   const trimmed = str.trim()
//   const number = parseInt(trimmed)
//   const nextNumber = number + 1
//   return String.fromCharCode(nextNumber)
// }

// const nextCharForNumberString = str => {
//   return String.fromCharCode(parseInt(str.trim()) + 1)
// }

const Box = require('../lib/Box')
const { trim, inc, toLower } = require('ramda')

const nextCharForNumberString = str => 
  Box(str)
  .map(trim)
  .map(parseInt)
  .map(inc)
  .map(String.fromCharCode)
  .fold(toLower)


describe('01', () => {
  it('should work', () => {
    const result = nextCharForNumberString('  64  ')
    expect(result).toBe('a')
  })
})
  
