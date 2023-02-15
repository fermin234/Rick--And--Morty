import { Router } from "express";
const router = Router();
import character from "./characters";

router.use("/character", character);

export default router;
