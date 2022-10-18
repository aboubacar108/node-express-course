// Modules
// CommonJS library, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// modules are used to separate parts of the app not to keep everything in one file to avoid screwing up evrything
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi('susan')
sayHi('john')
sayHi('peter')