import { Router } from "express";
import { getOrigin } from "../controllers/origin";
const router = Router();

router.get("/", getOrigin);

export default router;
