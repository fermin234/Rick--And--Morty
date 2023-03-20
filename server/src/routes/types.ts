import { Router } from "express";
import { getTypes } from "../controllers/types";
const router = Router();

router.get("/", getTypes);

export default router;
