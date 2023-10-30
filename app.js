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
const groupRoutes = require('./routes/groupRoutes');
const personRoutes = require('./routes/personRoutes');
const summaryRoutes = require('./routes/summaryRoutes');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/expenses', expenseRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/people', personRoutes);
app.use('/api/summary', summaryRoutes);

const port = config.port || 3000;

sequelize.sync().then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
