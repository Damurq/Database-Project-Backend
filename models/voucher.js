'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      voucher.belongsTo(models.request, {
        as: 'request',
        foreignKey: 'requestId'
      });
    }
  };
  voucher.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    requestId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    voucherNumber: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      unique: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: 'A',
    }
  }, {
    sequelize,
    modelName: 'voucher',
    timestamps: false,
    freezeTableName: true,
    classMethods: {},
  });
  return voucher;
};