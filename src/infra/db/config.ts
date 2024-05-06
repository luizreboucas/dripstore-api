import { Sequelize } from 'sequelize-typescript';
import { load } from 'ts-dotenv';

const env = load({
    PGHOST: String,
    PGDATABASE: String,
    PGUSER: String,
    PGPASSWORD:String

})

const sequelize = new Sequelize("postgresql://dripstore_db_owner:26cCwBUhQGiJ@ep-dry-block-a4fryvrb.us-east-1.aws.neon.tech/dripstore_db?sslmode=require")

export default sequelize;
