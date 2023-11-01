const path = require('path');
const Team = require(path.join(__dirname, '..', '..', '..', 'application', 'domain', 'Team'));
const Person = require(path.join(__dirname, '..', '..', '..', 'application', 'domain', 'Person'));

// const { Team  } = require('../../../../application/domain/Team');
// const { Person } = require('../../../../application/domain/Person');

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
