'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperHeroes extends Model {
   
    static associate(models) {
     SuperHeroes.hasMany(models.SuperPowers,{
      foreignKey:'superHeroesId'
     });
     SuperHeroes.hasMany(models.Images,{
      foreignKey:'superHeroesId'
     }) 
    }
  };
  SuperHeroes.init({
    nickName: {
      field:'nick_name',
      allowNull: false,
      type:DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    realName: {
      field:'real_name',
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    originDiscription: {
      field:'origin_discription',
      allowNull: false,
      type:DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    
    },
    cathPhrase: {
      field:'cath_phrase',
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },  
    },
    
  }, {
    sequelize,
    modelName: 'SuperHeroes',
    tableName: 'super_heroes',
    underscored: true,
  });
  return SuperHeroes;
};