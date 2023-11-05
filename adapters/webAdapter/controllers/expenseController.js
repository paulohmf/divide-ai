const path = require('path');
const Expense = require(path.join(__dirname, '..', '..', '..', 'application', 'domain', 'Expense'));
const Team = require(path.join(__dirname, '..', '..', '..', 'application', 'domain', 'Team'));
const Person = require(path.join(__dirname, '..', '..', '..', 'application', 'domain', 'Person'));
const ExpensePerson = require(path.join(__dirname, '..', '..', '..', 'application', 'domain', 'ExpensePerson'));


//const PersonExpense = require('../../models/PersonExpense'); // Adjust the path as needed
// const Team  = require('../../../../application/domain/Team');
// const Person = require('../../../../application/domain/Person');
// const Expense = require('../../../../application/domain/Expense');

exports.createExpense = async (req, res) => {
  const { name, price, split, category, status, description, teamId, personIds } = req.body;

  try {
    // Check if team exists
    const team = await Team.findByPk(teamId);
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    // Check if people exist
    const people = await Person.findAll({
      where: {
        id: personIds,
      },
    });

    if (people.length !== personIds.length) {
      return res.status(404).json({ error: 'One or more people not found' });
    }

    // Create the expense
    const expense = await Expense.create({
      name,
      price,
      split,
      category,
      status,
      description,
    });
    
    // // Set associations
    await expense.setTeam(team);
    for (let i = 0; i < personIds.length; i++) {
      const personId = personIds[i];
      const person = people.find((p) => p.id === personId);
      const share = split[i];

      await expense.addPerson(person, {
        through: {
          share: price * share,
        },
      });
    }

    res.status(201).json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll({ include: [Team, Person] });
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getExpenseById = async (req, res) => {
  const { id } = req.params;

  try {
    const expense = await Expense.findByPk(id, { include: [Team, Person] });
    if (!expense) {
      res.status(404).json({ error: 'Expense not found' });
    } else {
      res.status(200).json(expense);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateExpenseById = async (req, res) => {
  const { id } = req.params;
  const { name, price, split, category, status, description, teamId, personIds } = req.body;

  try {
    // Check if expense exists
    const expense = await Expense.findByPk(id);
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    // Check if team exists
    const team = await Team.findByPk(teamId);
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }

    // Check if people exist
    const people = await Person.findAll({
      where: {
        id: personIds,
      },
    });

    if (people.length !== personIds.length) {
      return res.status(404).json({ error: 'One or more people not found' });
    }

    // Update the expense
    await expense.update({
      name,
      price,
      split,
      category,
      status,
      description,
    });

    // Set associations
    await expense.setTeam(team);
    for (let i = 0; i < personIds.length; i++) {
      const personId = personIds[i];
      const person = people.find((p) => p.id === personId);
      const share = split[i];

      await expense.addPerson(person, {
        through: {
          share: price * share,
        },
      });
    }

    res.status(200).json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteExpenseById = async (req, res) => {
  const { id } = req.params;

  try {
    const expense = await Expense.findByPk(id);
    if (!expense) {
      res.status(404).json({ error: 'Expense not found' });
    } else {
      await expense.destroy();
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
