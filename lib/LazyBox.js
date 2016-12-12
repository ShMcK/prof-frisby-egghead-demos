const LazyBox = g => ({
  map: f => LazyBox(() => f(g())),
  fold: f => f(g()),
  inspect: () => {
    console.log(`LazyBox(${x})`)
    return LazyBox(g)
  },
})

module.exports = LazyBox
