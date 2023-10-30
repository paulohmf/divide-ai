const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.post('/', expenseController.createExpense);

router.get('/', expenseController.getAllExpenses);

router.get('/:id', expenseController.getExpenseById);

router.put('/:id', expenseController.updateExpenseById);

router.delete('/:id', expenseController.deleteExpenseById);

module.exports = router;

