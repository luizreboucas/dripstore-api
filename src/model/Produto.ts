import { DataTypes, Optional } from 'sequelize';
import { Table, Model, Column } from 'sequelize-typescript';
import sequelize from '../infra/db/config';

const Produto = sequelize.define('produtos', {

    id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    desconto: {
        type: DataTypes.DECIMAL,
    },
    preco: {
        type: DataTypes.DECIMAL
    },
    ativo: {
        type: DataTypes.CHAR,
        defaultValue: true
    },
    categoria: {
        type: DataTypes.TEXT
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


export default Produto;
