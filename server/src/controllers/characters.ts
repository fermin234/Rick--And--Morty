import axios from "axios";
import { RequestHandler } from "express-serve-static-core";
import Character from "../models/Character";

export const allCharacters: RequestHandler = async (req, res) => {
  try {
    let { filterValues } = req.body;
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

      infoAPI = infoAPI.map((e) => ({
        _apiID: e.id,
        name: e.name,
        status: e.status,
        gender: e.gender,
        species: e.species,
        type: e.type,
        image: e.image,
        origin_name: e.origin.name,
        origin_url: e.origin.url,
        location_name: e.location.name,
        location_url: e.location.url,
      }));

      Character.collection.insertMany(infoAPI);
      return res.json(infoAPI);
    }

    //---------------Filtro los personajes---------------------
    if (filterValues) {
      const characters = await Character.
      // find({ name: filterValues.name })
      // .where("name")
      // .equals(filterCharacters.name);
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

export const deleteCharacters: RequestHandler = async (req, res) => {
  try {
    await Character.deleteMany();

    return res.status(200).json({ message: `Characters deleted` });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const filterCharacters: RequestHandler = async (filter) => {
  try {
    return { message: `Characters filtered` };
  } catch (error) {
    return error;
  }
};
