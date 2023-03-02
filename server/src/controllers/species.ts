import axios from "axios";
import { RequestHandler } from "express";
import { ICharacter } from "../models/Character";
import Species from "../models/Species";

//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
//agregar codigos de respuesta
export const getSpecies: RequestHandler = async (req, res) => {
  try {
    const speciesDB = await Species.find();
    if (speciesDB.length >= 10) return res.json(speciesDB);

    const characterDB = await axios.get("/character");
    const mySetSpecies = new Set(
      characterDB.data.map((e: ICharacter) => e.species)
    );
    const species = [...mySetSpecies].map((e) => ({ name: e }));
    Species.collection.insertMany(species);

    return res.json(species);
  } catch (error) {
    return res.json(error);
  }
};
