import {Router} from "express";
import { getPelicula, getPeliculas, registerPelicula, deletePelicula } from "../controllers/catalogoPeliculas.controllers.js";

const router = Router();

router.get('/peliculas', getPeliculas);
router.get('/peliculas/:id', getPelicula);
router.post('/peliculas', registerPelicula);
router.delete('/peliculas/:id', deletePelicula);

export default router;