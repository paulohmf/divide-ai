const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Team = sequelize.define('Team', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Team;

