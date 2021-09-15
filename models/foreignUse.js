'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class foreignUse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      foreignUse.belongsTo(models.request, {
        as: 'request',
        foreignKey: 'requestId',
      });
    }
  };
  foreignUse.init({
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
      unique: true,
    },
    isNeed: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    source: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    arrival: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: 'A',
    }
  }, {
    sequelize,
    modelName: 'foreignUse',
    timestamps: false,
    freezeTableName: true,
    classMethods: {},
  });
  return foreignUse;
};