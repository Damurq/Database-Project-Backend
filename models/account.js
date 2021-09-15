'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      account.belongsTo(models.customer, {
        as: 'customer',
        foreignKey: 'customerId',
      });
    }
  };
  account.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    number: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      unique: true,
    },
    type: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: 'A',
    },
  }, {
    sequelize,
    modelName: 'account',
    timestamps: false,
    freezeTableName: true,
    classMethods: {},
  });
  return account;
};