import { where } from "sequelize";
import { Tienda } from "../models/tienda.js"
import { Articulo } from "../models/Articulo.js";

export const getTiendas = async (req, res) => {
    try {
        const tiendas = await Tienda.findAll({
            include: [{
                model: Articulo,
                as: 'articulos'
            }]
        });
        res.json(tiendas);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const getTienda = async (req, res) => {
    try {
        const { name } = req.params
        const tienda = await Tienda.findOne({
            where: {
                name
            },
            include: [{
                model: Articulo,
                as: 'articulos'
            }]
        }
        )
        if (!tienda)
            return res.status(404).json({ message: 'Tienda no existe' , success : true })
        res.json(tienda)
    } catch (error) {
        return res.status(500).json({ message: error.message , success : false })
    }
}

export const createTienda = async (req, res) => {
    try {
        const { name } = req.params
        const newTienda = await Tienda.create({
            name
        })
        const articulos = await newTienda.getArticulos(); 
        res.json({ ...newTienda.toJSON(), articulos , success : true });
    } catch (error) {
        return res.status(500).json({ message: error.message,  success : false })
    }
};

export const updateTienda = async (req, res) => {
    try {
        const { id } = req.params
        const { name } = req.body

        const tienda = await Tienda.findOne({
            where: {
                id
            }
        })
        tienda.name = name

        await tienda.save();
        const articulos = await tienda.getArticulos(); 
        res.json({ ...tienda.toJSON(), articulos , success : true });
    } catch (error) {
        return res.status(500).json({ message: error.message , success : false})
    }
}

export const deleteTienda = async (req, res) => {
    try {
        const { name } = req.params
        await Tienda.destroy({
            where: {
                name
            }
        })
        res.json({ message: 'Store deleted' , success : true })
    } catch (error) {
        return res.status(500).json({ message: error.message , success : false})
    }
}

