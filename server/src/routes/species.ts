import { Router } from "express";
import { getSpecies } from "../controllers/species";
const router = Router();

router.get("/", getSpecies);

export default router;
