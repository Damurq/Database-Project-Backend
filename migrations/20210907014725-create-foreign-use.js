'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('foreignUse', {
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
      isNeed: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      source: {
        type: Sequelize.STRING(1),
        allowNull: true,
      },
      arrival: {
        type: Sequelize.STRING(1),
        allowNull: true,
      },
      status: {
        type: Sequelize.STRING(1),
        allowNull: false,
        defaultValue: 'A',
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('foreignUse');
  }
};