const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const { sequelize } = require('./config/database');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const expenseRoutes = require('./routes/expenseRoutes');
const teamRoutes = require('./routes/teamRoutes');
const personRoutes = require('./routes/personRoutes');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/expenses', expenseRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/people', personRoutes);

const port = config.port || 3000;

sequelize.sync().then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
