import { where } from "sequelize";
import { Usuario } from "../models/Usuario.js";
import { createToken } from "../middleware/authService.js";
import bcrypt from 'bcrypt';

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Usuario.findOne({ where: { username } });

        if (!user) {
            return res.status(401).json({ message: 'Usuario invalido' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Contraseña invalida' });
        }

        const access_token = createToken(user);
        res.json({ access_token });
    } catch (error) {
        console.error('Error en logueo:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const createUsuarios = async (req, res) => {
    try {
        const { username, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUsuario = await Usuario.create({
            username,
            password : hashedPassword
        })
        res.json({ message: "User created succesfully." , success : true })
    } catch (error) {
        return res.status(500).json({ message: error.message , success : false})
    }
}
