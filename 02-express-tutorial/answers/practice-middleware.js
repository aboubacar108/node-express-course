const consoleLog = (req, res, next) => {
  console.log('Hello middleware world!')
  next()
}

module.exports = consoleLog