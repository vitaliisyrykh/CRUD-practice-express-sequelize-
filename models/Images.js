'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    static associate(models) {
      Images.belongsTo(models.SuperHeroes,{
        foreignKey:'superHeroesId',
      })
    }
  };
  Images.init({
    path: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
   
  }, {
    sequelize,
    modelName: 'Images',
    tableName: 'images',
    underscored: true,
  });
  return Images;
};