'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      services.belongsTo(models.status, {
        foreignKey: 'status_id'
      }),
      services.belongsTo(models.clients, {
        foreignKey: 'client_id'
      })
    }
  };
  services.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'services',
  });
  return services;
};