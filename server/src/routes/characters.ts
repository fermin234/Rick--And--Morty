import { Router } from "express";
import {
  allCharacters,
  idCharacter,
  createCharacter,
  deleteCharacters,
} from "../controllers/characters";
const router = Router();

router.get("/", allCharacters);
router.get("/:id", idCharacter);
router.post("/", createCharacter);
router.delete("/", deleteCharacters);

export default router;
