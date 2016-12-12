const { Right, Left, fromNullable } = require('../lib/Either')
const { inc, slice, toUpper, identity } = require('ramda')

const findColor = name =>
  fromNullable(({
    red: '#red', blue: '#blue', yellow: '#yellow'
  })[name])

describe('03', () => {
  it('should create a Right', () => {
    const result = Right(3)
      .map(inc)
      .fold(x => 'error', identity)
    expect(result).toBe(4)
  })

  it('should create a Left', () => {
    const result = Left(3)
      .map(inc)
      .fold(x => 'error', identity)
    expect(result).toBe('error')
  })

  it('should find a color', () => {
    const result = findColor('red')
      .map(slice(1, Infinity))
      .map(toUpper)
      .fold(x => 'error', identity)
    expect(result).toBe('RED')
  })

  it('should create an error if no color', () => {
    const result = findColor('green')
      .map(slice(1, Infinity))
      .map(toUpper)
      .fold(x => 'error', identity)
    expect(result).toBe('error')
  })

})