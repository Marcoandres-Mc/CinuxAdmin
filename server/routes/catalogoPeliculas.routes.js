import {Router} from "express";
import { getPelicula, getPeliculas, registerPelicula, updatePelicula, deletePelicula } from "../controllers/catalogoPeliculas.controllers.js";

const router = Router();

router.get('/peliculas', getPeliculas);
router.get('/peliculas/:id', getPelicula);
router.post('/peliculas', registerPelicula);
router.put('/peliculas/:id', updatePelicula);
router.delete('/peliculas/:id', deletePelicula);

export default router;