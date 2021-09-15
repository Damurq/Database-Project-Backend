'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  };
  document.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    type: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING(50),
      unique: true,
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: 'A',
    },
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'document',
    classMethods: {},
  });
  return document;
};