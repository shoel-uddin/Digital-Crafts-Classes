'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class holiday_shopping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  holiday_shopping.init({
    name: DataTypes.STRING,
    item: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'holiday_shopping',
  });
  return holiday_shopping;
};