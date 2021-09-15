'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('account', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'customer',
          key: 'id',
        }
      },
      number: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        unique: true,
      },
      type: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      amount: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      status: {
        type: Sequelize.STRING(1),
        allowNull: false,
        defaultValue: 'A',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('account');
  }
};