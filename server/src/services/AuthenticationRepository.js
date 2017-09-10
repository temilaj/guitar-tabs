const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports =  {
  jwtSignUser(user) {
    const oneweek = 60 * 60 * 24 *7;
    return jwt.sign(user, config.authentication.jwtSecret, {
      expiresIn: oneweek,
    });
  },
}
