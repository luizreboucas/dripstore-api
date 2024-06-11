import { DataTypes, Optional } from 'sequelize';
import { Table, Model, Column } from 'sequelize-typescript';
import sequelize from '../infra/db/config';

const User = sequelize.define('users',{
    
        id:{
            type: DataTypes.NUMBER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        senha: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        data_cadastro: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        }
    
}, {
    createdAt: 'data_cadastro',
    timestamps: true,
    updatedAt: false
});


export default User;
