const { Group, Person } = require('../models');

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

exports.addPersonToGroup = async (req, res) => {
  const { personId, groupId } = req.body;

  try {
    // Check if both person and group exist
    const person = await Person.findByPk(personId);
    const group = await Group.findByPk(groupId);

    if (!person || !group) {
      return res.status(404).json({ error: 'Person or group not found' });
    }

    // Add person to the group
    await person.addGroup(group);

    res.status(200).json({ message: 'Person added to the group successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
