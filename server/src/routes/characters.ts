import { Router } from "express";
import {
  allCharacters,
  idCharacter,
  createCharacter,
  deleteCharacters,
  deleteCharacter,
  updateCharacter,
} from "../controllers/characters";
const router = Router();

router.get("/", allCharacters);
router.get("/:id", idCharacter);
router.post("/", createCharacter);
router.patch("/:id", updateCharacter);
router.delete("/:id", deleteCharacter);
//----- Solamente de desarrollo -------
router.delete("/", deleteCharacters);

export default router;
