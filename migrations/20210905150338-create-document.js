'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('document', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      type: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      number: {
        type: Sequelize.STRING(50),
        unique: true,
      },
      status: {
        type: Sequelize.STRING(1),
        allowNull: false,
        defaultValue: 'A',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('document');
  }
};