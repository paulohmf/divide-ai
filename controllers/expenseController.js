const { Expense, Group, Person } = require('../models');

exports.createExpense = async (req, res) => {
  const { name, price, split, category, status, description, groupId, personIds } = req.body;

  try {
    // Check if group exists
    const group = await Group.findByPk(groupId);
    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
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
    
    // Set associations
    await expense.setGroup(group);
    await expense.setPeople(people);

    res.status(201).json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll({ include: [Group, Person] });
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getExpenseById = async (req, res) => {
  const { id } = req.params;

  try {
    const expense = await Expense.findByPk(id, { include: [Group, Person] });
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
  const { name, price, split, category, status, description, groupId, personIds } = req.body;

  try {
    // Check if expense exists
    const expense = await Expense.findByPk(id);
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    // Check if group exists
    const group = await Group.findByPk(groupId);
    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
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
    await expense.setGroup(group);
    await expense.setPeople(people);

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
