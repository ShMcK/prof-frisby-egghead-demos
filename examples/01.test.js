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

const nextCharForNumberString = str => 
  Box(str)
  .map(s => s.trim())
  .map(s => new Number(s))
  .map(s => s + 1)
  .map(s => String.fromCharCode(s))
  .fold(s => s.toLowerCase())


describe('01', () => {
  it('should work', () => {
    const result = nextCharForNumberString('  64  ')
    expect(result).toBe('a')
  })
})
  
