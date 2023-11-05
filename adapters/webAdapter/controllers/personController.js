const path = require('path');
const Team = require(path.join(__dirname, '..', '..', '..', 'application', 'domain', 'Team'));
const Person = require(path.join(__dirname, '..', '..', '..', 'application', 'domain', 'Person'));
const Expense = require(path.join(__dirname, '..', '..', '..', 'application', 'domain', 'Expense'));

// const { Team  } = require('../../../../application/domain/Team');
// const { Person } = require('../../../../application/domain/Person');
const sequelize = require('../../../database');

exports.getPersonSummary = async (req, res) => {
  const { personId } = req.params;

  try {
    // Check if person exists
    const person = await Person.findByPk(personId);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Get the person's expenses with stratification
    const expenseSummary = await Expense.findAll({
      attributes: [
        [sequelize.fn('SUM', sequelize.col('price')), 'totalAmount'],
        [sequelize.literal('"Team"."name"'), 'teamName'],
        [sequelize.literal('"Expense"."category"'), 'category'],
        [sequelize.literal('"Expense"."status"'), 'status'],
      ],
      include: [
        {
          model: Person,
          attributes: ['id', 'name'],
          through: { attributes: [] },
          where: { id: personId },
        },
        {
          model: Team,
          attributes: [],
        },
      ],
      group: ['Team.name', 'Expense.id', 'Expense.category', 'Expense.status', 'People.id', 'People.name'],
    });


    res.status(200).json(expenseSummary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.createPerson = async (req, res) => {
  try {
    const { name } = req.body;
    const person = await Person.create({ name });
    res.status(201).json(person);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllPeople = async (req, res) => {
  try {
    const people = await Person.findAll();
    res.status(200).json(people);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getPersonById = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await Person.findByPk(id);
    if (!person) {
      res.status(404).json({ error: 'Person not found' });
    } else {
      res.status(200).json(person);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updatePersonById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const person = await Person.findByPk(id);
    if (!person) {
      res.status(404).json({ error: 'Person not found' });
    } else {
      await person.update({ name });
      res.status(200).json(person);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deletePersonById = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await Person.findByPk(id);
    if (!person) {
      res.status(404).json({ error: 'Person not found' });
    } else {
      await person.destroy();
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.addPersonToTeam = async (req, res) => {
  const { personId, teamId } = req.body;

  try {
    // Check if both person and team exist
    const person = await Person.findByPk(personId);
    const team = await Team.findByPk(teamId);

    if (!person || !team) {
      return res.status(404).json({ error: 'Person or team not found' });
    }

    // Add person to the team
    await person.addTeam(team);

    res.status(200).json({ message: 'Person added to the team successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
