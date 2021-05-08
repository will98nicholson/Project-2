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
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'shows',
    }
)

module.exports = Shows;