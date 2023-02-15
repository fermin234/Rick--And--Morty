import { Router } from "express";
import { allCharacters, idCharacter } from "../controllers/characters";
const router = Router();

router.get("/", allCharacters);
router.get("/:id", idCharacter);

export default router;
