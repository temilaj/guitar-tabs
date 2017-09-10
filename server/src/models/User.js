const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

// module.exports = (sequelize, DataTypes) => 
//   sequelize.define('User', {
//     email: {
//       type: DataTypes.STRING,
//       unique: true,
//       validate: {
//         notEmpty: true,
//         isEmail: true
//       }
//     },
//     password: DataTypes.STRING
//   })

function hashPassword (user, options) {
  const saltFactor = 100;

  if(!user.changed('password')) {
    return;
  }
  return bcrypt
    .genSaltAsync(saltFactor)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash);
    });
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    password: DataTypes.STRING
  }, 
  {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword,
    },
  });

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  };

  return User
}