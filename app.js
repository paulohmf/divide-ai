const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const sequelize = require('./database');

const Expense = require('./application/domain/Expense');
const Team = require('./application/domain/Team');
const Person = require('./application/domain/Person');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const expenseRoutes = require('./adapters/webAdapter/routes/expenseRoutes');
const teamRoutes = require('./adapters/webAdapter/routes/teamRoutes');
const personRoutes = require('./adapters/webAdapter/routes/personRoutes');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/login', (req, res) => {
  res.send('Login');
});
app.get('/groups', (req, res) => {
  res.send('Grupos');
});
app.get('/groups/:id', (req, res) => {
  res.send('Grupo x');
});
app.get('/expenses', (req, res) => {
  res.send('Despesas');
});

app.use('/api/expenses', expenseRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/people', personRoutes);

// Sync Sequelize models with the database
sequelize.sync()
  .then(() => {
    app.listen(config.port || 3000, () => {
      console.log(`Server running on port ${config.port || 3000}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing with the database:', error);
  });
