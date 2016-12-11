const { Right, Left, fromNullable, tryCatch } = require('../lib/Either')
const fs = require('fs')

// const getPort = () => {
//   try {
//     const str = fs.readFilySync('somefile.json')
//     const config = JSON.parse(str)
//     return config.port
//   } catch (e) {
//     return 3000
//   }
// }

const getPort = () =>
  tryCatch(() => fs.readFileSync('someFile.json'))
    .chain(x => tryCatch(() => JSON.parse(x)))
    .fold(e => 3000, x => x.port)

describe('04', () => {
  it('should use the default work', () => {
    const result = getPort()
    expect(result).toBe(3000)
  })
})