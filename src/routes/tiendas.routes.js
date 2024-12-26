import { Router } from "express";
import { getTiendas, createTienda, updateTienda, deleteTienda, getTienda } from "../controllers/tiendas.controller.js";
import { authenticateJWT } from "../controllers/auth.controller.js";
const router = Router() 

router.get('/store', authenticateJWT, getTiendas)
router.post('/store/:name' , authenticateJWT,  createTienda)
router.put('/store/:id', authenticateJWT,  updateTienda )
router.delete('/store/:name', authenticateJWT,  deleteTienda)
router.get('/store/:name', authenticateJWT, getTienda)

export default router