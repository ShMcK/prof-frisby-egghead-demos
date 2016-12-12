// semi-group = concattable

// monoid
const Sum = x => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  fold: f => x,
  inspect: x => {
    console.log(`Sum(${x})`)
    return Sum(x)
  },
  empty: () => Sum(0),
})

exports.Sum = Sum

// monoid 
const All = x => ({
  x,
  concat: ({ x: y }) => All(x && y),
  fold: f => x,
  inspect: x => {
    console.log(`All(${x})`)
    return All(x)
  },
  empty: () => All(true),
})

exports.All = All

const First = x => ({
  x,
  concat: ( _ ) => First(x),
  fold: f => x,
  inspect: x => {
    console.log(`First(${x})`)
    return First(x)
  },
})

exports.First = First
