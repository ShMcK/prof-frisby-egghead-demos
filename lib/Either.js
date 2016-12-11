// const Either = Right || Left

const Right = x => ({
  map: f => Right(f(x)),
  inspect: () => {
    console.log(`Right(${x})`)
    return Right(x)
  },
  fold: (f, g) => g(x),
})

const Left = x => ({
  map: f => Left(x), // does not call f
  inspect: () => {
    console.log(`Left(${x})`)
    return Left(x)
  },
  fold: (f, g) => f(x),
})

const fromNullable = x =>
  x != null ? Right(x) : Left(null)

exports.Right = Right
exports.Left = Left
exports.fromNullable = fromNullable
