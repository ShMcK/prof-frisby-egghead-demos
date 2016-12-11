const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => {
    console.log(`Box(${x})`)
    return Box(x)
  },
})

module.exports = Box