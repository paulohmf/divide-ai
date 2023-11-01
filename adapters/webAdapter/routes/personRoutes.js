const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.post('/', personController.createPerson);

router.get('/', personController.getAllPeople);

router.get('/:id', personController.getPersonById);

router.put('/:id', personController.updatePersonById);

router.delete('/:id', personController.deletePersonById);

router.post('/add-to-team', personController.addPersonToTeam);

module.exports = router;

