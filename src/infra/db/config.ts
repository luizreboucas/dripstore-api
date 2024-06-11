import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize('dripstore_db', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
  });

export default sequelize;
