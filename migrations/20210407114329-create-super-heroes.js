'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('super_heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickName: {
        field: 'nick_name',
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      realName: {
        field: 'real_name',
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      originDiscription: {
        field: 'origin_discription',
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      cathPhrase: {
        field: 'cathPhrase',
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'update_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('super_heroes');
  }
};