import axios from "axios";
import { RequestHandler } from "express-serve-static-core";
import Character from "../models/Character";

export const allCharacters: RequestHandler = async (req, res) => {
  try {
    let { filterValues } = req.body;
    console.log("*", filterValues);
    //---------------Peticion de todos los perdonajes a la base de datos---------------------
    const infoDB = await Character.find();

    //---------------Si no hay personajes en la base de datos, procedo a pedirlos a la api y volcarlos a la base de datos---------------------
    if (infoDB.length < 800) {
      const pages = 42;
      const urlApi = [];
      for (let i = 1; i <= pages; i++) {
        urlApi.push(`${process.env.API}/character?page=${i}`);
      }
      let promises = urlApi.map((e) => axios.get(e));
      let data = await axios.all(promises);
      let infoAPI = data.map((e) => e.data.results).flat(1);

      Character.collection.insertMany(infoAPI);
      return res.json(infoAPI);
    }

    //---------------Filtro los personajes---------------------
    if (filterValues) {
      if (filterValues.name)
        filterValues.name = new RegExp(filterValues.name, "i");
      if (filterValues.type)
        filterValues.type = new RegExp(filterValues.type, "i");
      if (filterValues.species)
        filterValues.species = new RegExp(filterValues.species, "i");
      const characters = await Character.find(filterValues);
      return res.status(200).json(characters);
    }

    return res.json(infoDB);
  } catch (error) {
    return res.json(error);
  }
};

export const idCharacter: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await axios.get(`${process.env.API}/character/${id}`);
    return res.json(result.data);
  } catch (error) {
    return res.json(error);
  }
};

export const createCharacter: RequestHandler = async (req, res) => {
  try {
    const character = new Character(req.body);
    character.name = character.name[0]
      .toUpperCase()
      .concat(character.name.slice(1));
    await character.save();

    return res
      .status(201)
      .json({ message: `${character.name} successfully created` });
  } catch (error) {
    return res.status(400).json(error);
  }
};

//------------- Solamente de desarrollo ------------------------------
export const deleteCharacters: RequestHandler = async (req, res) => {
  try {
    await Character.deleteMany();

    return res.status(200).json({ message: `Characters deleted` });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteCharacter: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await Character.deleteOne({ _id: id });

    return res.status(200).json(character);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateCharacter: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { fields } = req.body;
  try {
    const character = await Character.updateOne({ _id: id }, { $set: fields });

    return res.status(200).json(character);
  } catch (error) {
    return res.status(400).json(error);
  }
};
