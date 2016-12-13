const Box = x => ({
  ap: b2 => b2.map(x),
  map: f => Box(f(x)),
  chain: f => f(x),
  fold: f => f(x),
  inspect: () => {
    console.log(`Box(${x})`)
    return Box(x)
  },
})

module.exports = Box
