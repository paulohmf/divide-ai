// configuração inicial apenas
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: "divide_ai",
  password: 'postgres',
  port: 5433,
});

module.exports = pool;
