const Either = require('data.either')
const { liftA2 } = require('../lib/Lift')

const $ = selector =>
  Either.of({ selector, height: 10 })

// const getScreenSize = (screen, head, foot) =>
//   screen - (head.height + foot.height)

// $('header').chain(head =>
//   $('footer').map(footer =>
//   getScreenSize(800, head, footer)))


const getScreenSize = screen => head => foot =>
  screen - (head.height + foot.height)

// const res = Either.of(getScreenSize(800))
//   .ap($('header'))
//   .ap($('footer'))
// 780

const res = liftA2(getScreenSize(800), $('header'), $('footer'))
// 780
