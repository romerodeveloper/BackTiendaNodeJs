import { Router } from "express";
import { loginUser, createUsuarios } from "../controllers/usuarios.controller.js";
const router = Router() 


router.post('/auth', loginUser)
router.post('/register', createUsuarios)

export default router