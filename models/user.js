'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      User.hasMany(models.Campaign, {
        foreignKey: 'user_id',
        as: 'campaigns',
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roles: DataTypes.JSON,
    last_login: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};