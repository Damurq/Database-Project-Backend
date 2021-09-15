'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      request.belongsTo(models.office, {
        as: 'office',
        foreignKey: 'officeId',
      });
      request.belongsTo(models.account, {
        as: 'account',
        foreignKey: 'accountId',
      });
    }
  };
  request.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    officeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estimatedAmount: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    averageTransactions: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    fundSource: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fundArrival: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: 'A',
    },
  }, {
    sequelize,
    modelName: 'request',
    timestamps: false,
    freezeTableName: true,
    classMethods: {},
  });
  return request;
};