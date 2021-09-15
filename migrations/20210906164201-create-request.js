'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('request', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      officeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      estimatedAmount: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      averageTransactions: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      fundSource: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      fundArrival: {
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
    await queryInterface.dropTable('request');
  }
};