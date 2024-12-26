import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Articulo } from './Articulo.js';

export const Tienda = sequelize.define('tiendas', {
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull: false,
        unique: true 
    }
})

Tienda.hasMany(Articulo, {
    foreignKey: 'store_id',
    as: 'articulos' 
});