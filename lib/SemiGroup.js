// semi-group = concattable

const Sum = x => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  fold: f => x,
  inspect: x => {
    console.log(`Sum(${x})`)
    return Sum(x)
  }
})

exports.Sum = Sum

const All = x => ({
  x,
  concat: ({ x: y }) => All(x && y),
  fold: f => x,
  inspect: x => {
    console.log(`All(${x})`)
    return All(x)
  }
})

exports.All = All

const First = x => ({
  x,
  concat: ( _ ) => First(x),
  fold: f => x,
  inspect: x => {
    console.log(`First(${x})`)
    return First(x)
  }
})

exports.First = First
