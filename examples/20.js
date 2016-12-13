const { List } = require('immutable-ext')
const { identity } = require('ramda')

const merch = () =>
  List.of(x => y => z => `${x}-${y}-${z}`)
      .ap(List(['T-shirt', 'Sweater']))
      .ap(List(['large', 'medium', 'small']))
      .ap(List(['black']))

// loops within loops within loops

const res = merch()
console.log(res)

