const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

const hashPassword = (user, options) => {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(function (salt) {
      return bcrypt.hashAsync(user.password, salt, null)
    })
    .then(function (hash) {
      return user.setDataValue('password', hash)
    })
}


module.exports = (sequelize, DataTypes) => {
 const User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
      fName: DataTypes.STRING,
      lName: DataTypes.STRING
},{
  hooks:{
    beforeSave: hashPassword
  }
})

User.prototype.comparePassword = function(password){
  return bcrypt.compareAsync(password, this.password)
}

return User
}