const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

router.post('/', teamController.createTeam);

router.get('/', teamController.getAllTeams);

router.get('/:id', teamController.getTeamById);

router.put('/:id', teamController.updateTeamById);

router.delete('/:id', teamController.deleteTeamById);

module.exports = router;

