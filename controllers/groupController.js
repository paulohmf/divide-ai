const { Group } = require('../models');

const { Group, Person } = require('../models');

exports.createGroup = async (req, res) => {
  try {
    const { name } = req.body;
    const group = await Group.create({ name });
    res.status(201).json(group);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.findAll({ include: Person });
    res.status(200).json(groups);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getGroupById = async (req, res) => {
  const { id } = req.params;
  try {
    const group = await Group.findByPk(id, { include: Person });
    if (!group) {
      res.status(404).json({ error: 'Group not found' });
    } else {
      res.status(200).json(group);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateGroupById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const group = await Group.findByPk(id);
    if (!group) {
      res.status(404).json({ error: 'Group not found' });
    } else {
      await group.update({ name });
      res.status(200).json(group);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteGroupById = async (req, res) => {
  const { id } = req.params;
  try {
    const group = await Group.findByPk(id);
    if (!group) {
      res.status(404).json({ error: 'Group not found' });
    } else {
      await group.destroy();
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
