// ExpensePerson.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const ExpensePerson = sequelize.define('ExpensePerson', {
  share: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

module.exports = ExpensePerson;
