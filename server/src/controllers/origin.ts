import axios from "axios";
import { RequestHandler } from "express";
import { ICharacter } from "../models/Character";
import Origin from "../models/Origin";

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
export const getOrigin: RequestHandler = async (req, res) => {
  try {
    await Origin.deleteMany();
    const originDB = await Origin.find();
    if (originDB.length >= 10) return res.json(originDB);

    const characterDB = await axios.get("/character");
    const mySetOrigin = new Set(
      characterDB.data
        .map((e: ICharacter) => e.origin)
        .map((e: ICharacter) => e.name)
    );
    const origin = [...mySetOrigin].map((e) => ({ name: e }));
    Origin.collection.insertMany(origin);

    return res.json(origin);
  } catch (error) {
    return res.json(error);
  }
};
