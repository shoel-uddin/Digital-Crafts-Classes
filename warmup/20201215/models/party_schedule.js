'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class party_schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  party_schedule.init({
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'party_schedule',
  });
  return party_schedule;
};