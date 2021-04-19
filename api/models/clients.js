'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {      
      clients.hasMany(models.services, {
        foreignKey: 'services_id'
      }),
      clients.belongsTo(models.users, {
        foreignKey: 'user_id'
      })
    }
  };
  clients.init({
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'clients',
  });
  return clients;
};