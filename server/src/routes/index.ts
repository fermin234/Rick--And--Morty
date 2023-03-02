import { Router } from "express";
const router = Router();
import character from "./characters";
import species from "./species";

router.use("/character", character);
router.use("/species", species);

export default router;
