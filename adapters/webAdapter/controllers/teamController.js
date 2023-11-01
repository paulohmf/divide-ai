const { Team } = require('../dominio');

const { Team, Person } = require('../dominio');

exports.createTeam = async (req, res) => {
  try {
    const { name } = req.body;
    const team = await Team.create({ name });
    res.status(201).json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllTeams = async (req, res) => {
  try {
    const teams = await Team.findAll({ include: Person });
    res.status(200).json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getTeamById = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await Team.findByPk(id, { include: Person });
    if (!team) {
      res.status(404).json({ error: 'Team not found' });
    } else {
      res.status(200).json(team);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateTeamById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const team = await Team.findByPk(id);
    if (!team) {
      res.status(404).json({ error: 'Team not found' });
    } else {
      await team.update({ name });
      res.status(200).json(team);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteTeamById = async (req, res) => {
  const { id } = req.params;
  try {
    const team = await Team.findByPk(id);
    if (!team) {
      res.status(404).json({ error: 'Team not found' });
    } else {
      await team.destroy();
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
