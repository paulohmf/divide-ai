const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');
const Team = require('./Team');

const Person = sequelize.define('Person', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Person.belongsToMany(Team, { through: 'PersonTeam' });
Team.belongsToMany(Person, { through: 'PersonTeam' });

module.exports = Person;
