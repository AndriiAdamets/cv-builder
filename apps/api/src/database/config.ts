// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
// import { config } from 'dotenv';

dotenv.config();

module.exports = {
  development: {
    dialect: 'mysql',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: 'cv_maker',
  },
  test: {
    dialect: 'mysql',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: 'cv_maker',
  },
  production: {
    dialect: 'mysql',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: 'cv_maker',
  },
};
