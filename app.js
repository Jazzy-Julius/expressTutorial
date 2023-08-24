// npm - global command, comes with node
// npm --version

//local dependency - use it only in this particular project
//npm 1 <packageName>

//global dependency - use it in amy project
// npm install -g <packageName>
//sudo install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root, create properties etc)
// npm init (step bby step)
//npm init -y (everything default)


const _ = require('lodash')
const items = [1,[2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
