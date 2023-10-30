const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// POST
// {
//   "name": "Barrigudinha do Jaeh"
//   "price": 50.0,
//   "split": [0.4, 0.6], 
//   "category": "Alimentação",
//   "status": "Pendente",
//   "description": "Quartinha no Jaeh",
//   "groupId": 1,
//   "personIds": [1, 2]
// }

const Expense = sequelize.define('Expense', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  split: {
    type: DataTypes.ARRAY(DataTypes.FLOAT),
    defaultValue: [],
  },
  category: {
    type: DataTypes.ENUM('Alimentação', 'Transporte', 'Entretenimento'),
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('Pendente', 'Liquidada'),
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Expense.belongsTo(Group);
Expense.belongsToMany(Person, { through: 'ExpensePerson' });
Person.belongsToMany(Expense, { through: 'ExpensePerson' });

module.exports = Expense;