const { Sequelize } = require('sequelize');

const config = require('../config/config');
const setupModels = require('../db/models/index');

const USER = encodeURIComponent(config.DB_USER);
const PASSWORD = encodeURIComponent(config.DB_PASSWORD);
const URI = `postgres://${USER}:${PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: (...msg) => console.log(msg),
})

setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;
