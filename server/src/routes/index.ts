import { Router } from "express";
const router = Router();
import character from "./characters";
import species from "./species";
import types from "./types";
import origin from "./origin";

router.use("/character", character);
router.use("/species", species);
router.use("/types", types);
router.use("/origin", origin);

export default router;
