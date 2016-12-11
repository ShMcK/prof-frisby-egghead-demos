const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => {
    console.log(`Box(${x})`)
    return x
  },
})

module.exports = Box
