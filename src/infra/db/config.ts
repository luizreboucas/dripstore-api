import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize('dripstore_db', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
  });


export const secret = '@$*(@#*$%UI$F34';

export default sequelize;
