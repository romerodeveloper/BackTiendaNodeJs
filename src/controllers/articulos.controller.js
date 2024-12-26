import { where } from "sequelize";
import { Articulo } from "../models/Articulo.js";
import { Tienda } from "../models/tienda.js";

export const getArticulos = async (req, res) => {
    try {
        const articulos = await Articulo.findAll();
        res.json(articulos);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const getArticulo = async (req, res)=>{
    try {
        const { name } = req.params
        const articulo = await Articulo.findOne({
            where : {
                name
            }
        })
        if (!articulo) 
            return res.status(404).json({ message: 'Articulo no existe' } )
        res.json(articulo)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createArticulo = async (req, res) => {
    try {
        const { name } = req.params
        const { price, store_id } = req.body
        const validateStore = await Tienda.findOne({
            where : {
                id : store_id
            }
        })

        if (!validateStore)
            return res.status(404).json({ message: 'Tienda no esta creada aun' , success : false} )
        const newArticulo = await Articulo.create({
            name,
            price,
            store_id
        })
        return res.status(200).json({
            newArticulo,  
            message: "Artículo creado exitosamente",  
            success: true
          });
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false})
    }
};

export const updateArticulo = async (req, res) => {
    try {
        const { name } = req.params
        const { price, store_id } = req.body

        const articulo = await Articulo.findOne({
            where : {
                name
            }
        })
        articulo.store_id = store_id
        articulo.price = price

        await articulo.save();
        return res.status(200).json({
            articulo,  
            message: "Artículo actualizado exitosamente",  
            success: true
          });
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false })
    }
 }

export const deleteArticulo = async (req, res) => {
    try {
        const { name } = req.params
        await Articulo.destroy({
            where: {
                name
            }
        })
        res.json({ message: 'Item deleted' , success: true })
    } catch (error) {
        return res.status(500).json({ message: error.message, success: false })
    }
}

