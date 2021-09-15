'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class complement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      complement.belongsTo(models.request, {
        as: 'request',
        foreignKey: 'requestId',
      });
    }
  };
  complement.init({
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
    reason: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    use: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: 'A',
    }
  }, {
    sequelize,
    modelName: 'complement',
    timestamps: false,
    freezeTableName: true,
    classMethods: {},
  });
  return complement;
};