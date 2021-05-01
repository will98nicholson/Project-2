const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shows extends Model {}

Shows.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'shows',
    }
)

module.exports = Shows;