'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class superHeroes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  superHeroes.init({
    nickname: DataTypes.STRING,
    real_name: DataTypes.STRING,
    origin_discription: DataTypes.STRING,
    cath_phrase: DataTypes.STRING,
    images: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'superHeroes',
  });
  return superHeroes;
};