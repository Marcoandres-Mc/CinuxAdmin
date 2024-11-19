import {Router} from "express";
import {getDulce, getDulces, registerDulce, deleteDulce, updateDulce} from "../controllers/dulceria.controllers.js";


const router = Router();

router.get('/dulces', getDulces);
router.get('/dulces/:id', getDulce);
router.post('/dulces', registerDulce);
router.put('/dulces/:id', updateDulce);
router.delete('/dulces/:id', deleteDulce);

export default router;