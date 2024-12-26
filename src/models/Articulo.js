import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Articulo = sequelize.define('articulos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, 
{
    timestamps : false
});

