import { Router } from "express";
import { createArticulo, deleteArticulo, getArticulo, getArticulos, updateArticulo } from "../controllers/articulos.controller.js";
import { authenticateJWT } from "../controllers/auth.controller.js";
const router = Router();

router.get('/item', authenticateJWT, getArticulos)
router.post('/item/:name', authenticateJWT,  createArticulo)
router.put('/item/:name', authenticateJWT, updateArticulo)
router.delete('/item/:name', authenticateJWT, deleteArticulo)
router.get('/item/:name', authenticateJWT,  getArticulo)

export default router;