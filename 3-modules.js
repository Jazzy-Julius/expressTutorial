// CommonJS, every file is module (By default)
// Modules - Encapsulated Code (Only share minimum)

const names = require('./4-namesmodule')
const sayHi = require('./5- utils')
const data = require('./6- alternativeModuleOps')
require('./7-mindGrenade')

sayHi('You')
sayHi(names.jay)
sayHi(names.kay)
