import axios from "axios";
import { RequestHandler } from "express";
import { ICharacter } from "../models/Character";
import Types from "../models/Types";

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
export const getTypes: RequestHandler = async (req, res) => {
  try {
    const typesDB = await Types.find();
    if (typesDB.length >= 10) return res.json(typesDB);

    const characterDB = await axios.get("/character");
    const mySetTypes = new Set(characterDB.data.map((e: ICharacter) => e.type));
    const types = [...mySetTypes].map((e) => ({ name: e }));
    Types.collection.insertMany(types);

    return res.json(types);
  } catch (error) {
    return res.json(error);
  }
};
