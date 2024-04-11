const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  password: 'root',
  database: 'postgres',
  user: 'root',
})

module.exports = pool;
