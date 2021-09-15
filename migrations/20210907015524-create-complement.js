'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('complement', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      requestId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: 'request',
          key: 'id'
        }
      },
      reason: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      use: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(1),
        allowNull: false,
        defaultValue: 'A',
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('complement');
  }
};