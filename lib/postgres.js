const { Pool } = require('pg');

const config = require('../config/config');

const USER = encodeURIComponent(config.DB_USER);
const PASSWORD = encodeURIComponent(config.DB_PASSWORD);
const URI = `postgres://${USER}:${PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`;

const pool = new Pool({ connectionString: URI })

module.exports = pool;
