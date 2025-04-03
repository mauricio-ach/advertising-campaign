'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campaign extends Model {
    
    static associate(models) {
      Campaign.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      })
    }
  }
  Campaign.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.ENUM('active', 'inactive', 'completed'),
    budget: DataTypes.DECIMAL,
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Campaign',
  });
  return Campaign;
};