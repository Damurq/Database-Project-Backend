'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('state', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(1),
        allowNull: false,
        defaultValue: 'A',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('state');
  }
};