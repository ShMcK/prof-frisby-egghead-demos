// const openSite = () => {}
// if (current_user) {
//   return renderPage(current_user)
// } else {
//   return showLogin()
// }

// const openSite = () =>
//   fromNullable(renderPage(current_user))
//   .fold(showLogin, renderPage)


// const getPrefs = user => {
//   if (user.premium) {
//     return loadPrefs(user.preferences)
//   } else {
//     return defaultPrefs
//   }
// }

// const getPrefs = user =>
//   (user.premium ? Right(user) : Left('not premium'))
//   .map(user => user.preferences)
//   .fold(() => defaultPrefs, x => loadPrefs(x))

// const streetName = user => {
//   const address = user.address
//   if (address) {
//     const street = address.street
//     if (street) {
//       return street.name
//     }
//   }
//   return 'no street'
// }

// const streetName = user =>
//   fromNullable(user.address)
//   .chain(address => fromNullable(address.street))
//   .map(street => street.name)
//   .fold(() => 'no street', name => name)

// const concatUniq = (x, ys) => {
//   const found = ys.filter(y => y === x)[0]
//   return found ? ys : ys.concat(x)
// }

// const concatUniq = (x, ys) => {
//   fromNullable(ys.filter(y => y === x)[0])
//   .fold(() => ys.concat(x), y => ys)  
// }

// const wrapExamples = example => {
//   if (example.previewPath) {
//     try {
//       example.preview = fs.readFileSync(example.previewPath)
//     } catch(e) {}
//     return example
//   }
// }

// const wrapExamples = example =>
//   fromNullable(example.previewPath)
//     .chain(previewPath => tryCatch(fs.readFileSync(previewPath)))
//     .fold(() => example, preview => Object.assign(example, { preview }))

// const parseDbUrl = cfg => {
//   try {
//     const c = JSON.parse(cfg)
//     if (c.url) {
//       return c.url.match(/someRegex/)
//     }
//   } catch(e) {
//     return null
//   }
// }
// const parseDbUrl = cfg =>
//   tryCatch(JSON.parse(cfg))
//   .chain(c => fromNullable(c.url))
//   .fold(() => null, url => url.match(/someRegex/))