'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class watch_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  watch_list.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'watch_list',
  });
  return watch_list;
};