exports.liftA2 = (f, fx, fy) =>
  fx.map(f).ap(fy)

exports.liftA3 = (f, fx, fy, fz) =>
  fx.map(f).ap(fy).ap(fz)