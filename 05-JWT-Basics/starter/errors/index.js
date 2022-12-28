const customAPIError =require('./custom-error')
const BadRequest =require('./bad-request')
const UnauthenticatedError =require('./unauthenticated')

module.exports = {
  customAPIError,
  BadRequest,
  UnauthenticatedError,
}
