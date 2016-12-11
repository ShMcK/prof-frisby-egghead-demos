// const Either = Right || Left

const Right = x => ({
  map: f => Right(f(x)),
  chain: f => f(x),
  inspect: () => {
    console.log(`Right(${x})`)
    return Right(x)
  },
  fold: (f, g) => g(x),
})

exports.Right = Right

const Left = x => ({
  map: f => Left(x), // does not call f
  chain: f => Left(x),
  inspect: () => {
    console.log(`Left(${x})`)
    return Left(x)
  },
  fold: (f, g) => f(x),
})

exports.Left = Left

const fromNullable = x =>
  x != null ? Right(x) : Left(null)

exports.fromNullable = fromNullable

const tryCatch = f => {
  try {
    return Right(f())
  } catch (e) {
    return Left(e)
  }
}

exports.tryCatch = tryCatch
