import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.database;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": c.username,
  "password": c.password,
  "database": c.name,
  "host":     c.host,

  dialect: c.dialect,
  storage: ':memory:',
});

