const path = require('path');
const Team = require(path.join(__dirname, '..', '..', '..', 'application', 'domain', 'Team'));
const Person = require(path.join(__dirname, '..', '..', '..', 'application', 'domain', 'Person'));
const Expense = require(path.join(__dirname, '..', '..', '..', 'application', 'domain', 'Expense'));
const ExpensePerson = require(path.join(__dirname, '..', '..', '..', 'application', 'domain', 'ExpensePerson'));

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

    const teamShare = await ExpensePerson.findAll({
      attributes: ['ExpenseId', 'share'],
      where: { PersonId: personId },
    });

    const enrichedTeamShare = await Promise.all(teamShare.map(async (share) => {
      const { ExpenseId, share: shareValue } = share.get();

      const expense = await Expense.findByPk(ExpenseId, {
        attributes: ['category', 'status', 'TeamId'],
        include: [
          {
            model: Team,
            attributes: ['id', 'name'],
          },
        ],
      });

      return {
        ExpenseId,
        share: shareValue,
        category: expense.category,
        status: expense.status,
        TeamId: expense.TeamId,
        TeamName: expense.Team ? expense.Team.name : null,
      };
    }));


    const groupedShare = enrichedTeamShare.reduce((result, share) => {
      const { category, TeamName, status, share: shareValue } = share;

      result[TeamName] = result[TeamName] || { total: 0 };

      result[TeamName][category] = result[TeamName][category] || { total: 0 };

      result[TeamName][category][status] = (result[TeamName][category][status] || 0) + shareValue;

      result[TeamName].total += shareValue;
      result[TeamName][category].total += shareValue;

      return result;
    }, {});

    //console.log(enrichedTeamShare);
    //console.log(groupedShare);

    res.status(200).json(groupedShare);
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
