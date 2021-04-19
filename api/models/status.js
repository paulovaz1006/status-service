'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      status.hasOne(models.services, {
        foreignKey: 'status_id'
      })
    }
  };
  status.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'status',
  });
  return status;
};