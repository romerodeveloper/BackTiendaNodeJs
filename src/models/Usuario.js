import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Usuario = sequelize.define('usuarios', {
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    username : {
        type : DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    password : {
        type : DataTypes.STRING,
        allowNull: false,
        unique: true 
    }
})