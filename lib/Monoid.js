const Sum = x => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  fold: f => x,
  inspect: x => {
    console.log(`Sum(${x})`)
    return Sum(x)
  }
})
Sum.empty = () => Sum(0)
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
All.empty = () => All(true)
exports.All = All

const Product = x => ({
  x,
  concat: ({ x: y }) => Product(x * y),
})
Product.empty = () => Product(1)
exports.Product = Product

const Any = x => ({
  x,
  concat: ({ x: y }) => Any(x || y)
})
Any.empty = () => Any(false),
exports.Any = Any

const Max = x => ({
  x,
  concat: ({ x : y}) => x < y ? Max(x) : Max(y),
})
Max.empty = () => Max(-Infinity)
exports.Max = Max

const Min = x => ({
  x,
  concat: ({ x : y}) => x < y ? Min(x) : Min(y),
})
Min.empty = () => Min(Infinity)
exports.Min = Min

const Pair = (x, y) => ({
  x,
  y,
  concat: ({ x: x1, y: y1 }) =>
    Pair(x.concat(x1), y.concat(y1))
})
exports.Pair = Pair
