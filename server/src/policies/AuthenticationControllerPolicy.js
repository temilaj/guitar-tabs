const joi = require('joi');

module.exports = {
  register (req, res, next) {
    const schema = {
      email: joi.string().email(),
      password: joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }
    next();
  }
}