'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperPowers extends Model {
    static associate (models) {
      SuperPowers.belongsTo(models.SuperHeroes, {
        foreignKey: 'superHeroesId',
      });
    }
  }
  SuperPowers.init(
    {
      power: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      discription: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'SuperPowers',
      tableName: 'super_powers',
      underscored: true,
    }
  );
  return SuperPowers;
};
