import { DataTypes } from "sequelize";
import sequelize from "../infra/db/config";



const Perfil = sequelize.define('perfis',{
    id:{
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "USER"
    },
    codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    data_cadastro:{
        type: DataTypes.DATE,
        defaultValue: new Date()
    }
})

export default Perfil;