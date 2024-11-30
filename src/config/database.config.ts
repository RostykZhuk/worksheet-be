import dotenv from 'dotenv';
import { Dialect } from 'sequelize';

dotenv.config();

interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  port: number;
  dialect: Dialect;
}

interface Config {
  development: DatabaseConfig;
  test: DatabaseConfig;
  production: DatabaseConfig;
}

const config: Config = {
  development: {
    username: process.env.DEV_DB_USER || '',
    password: process.env.DEV_DB_PASSWORD || '',
    database: process.env.DEV_DB_NAME || '',
    host: process.env.DEV_DB_HOST || '',
    port: parseInt(process.env.DEV_DB_PORT || '3306'),
    dialect: 'mysql'
  },
  test: {
    username: process.env.TEST_DB_USER || '',
    password: process.env.TEST_DB_PASSWORD || '',
    database: process.env.TEST_DB_NAME || '',
    host: process.env.TEST_DB_HOST || '',
    port: parseInt(process.env.TEST_DB_PORT || '3306'),
    dialect: 'mysql'
  },
  production: {
    username: process.env.PROD_DB_USER || '',
    password: process.env.PROD_DB_PASSWORD || '',
    database: process.env.PROD_DB_NAME || '',
    host: process.env.PROD_DB_HOST || '',
    port: parseInt(process.env.PROD_DB_PORT || '3306'),
    dialect: 'mysql'
  }
};

export = config; 