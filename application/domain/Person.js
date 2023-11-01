const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Person = sequelize.define('Person', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Person.belongsToMany(Group, { through: 'PersonGroup' });
Group.belongsToMany(Person, { through: 'PersonGroup' });

module.exports = Person;
