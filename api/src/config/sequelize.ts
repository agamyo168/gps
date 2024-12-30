import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config();
const {
  DB_NAME,
  DB_TEST,
  NODE_ENV,
  DB_DIALECT,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
} = process.env;
const database = NODE_ENV == 'test' ? DB_TEST : DB_NAME;
const sequelize = new Sequelize(
  `${DB_DIALECT}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${database}`
);

export default sequelize;
