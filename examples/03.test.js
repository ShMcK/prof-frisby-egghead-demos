const { Right, Left, fromNullable } = require('../lib/Either')

const findColor = name =>
  fromNullable(({
    red: '#red', blue: '#blue', yellow: '#yellow'
  })[name])

describe('03', () => {
  it('should create a Right', () => {
    const result = Right(3)
      .map(x => x + 1)
      .fold(x => 'error', x => x)
    expect(result).toBe(4)
  })

  it('should create a Left', () => {
    const result = Left(3)
      .map(x => x + 1)
      .fold(x => 'error', x => x)
    expect(result).toBe('error')
  })

  it('should find a color', () => {
    const result = findColor('red')
      .map(x => x.slice(1))
      .map(x => x.toUpperCase())
      .fold(x => 'error', x => x)
    expect(result).toBe('RED')
  })

  it('should create an error if no color', () => {
    const result = findColor('green')
    .inspect()
      .map(x => x.slice(1))
      .map(x => x.toUpperCase())
      .fold(x => 'error', x => x)
    expect(result).toBe('error')
  })

})