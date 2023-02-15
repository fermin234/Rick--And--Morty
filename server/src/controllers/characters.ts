import axios from "axios";
import { RequestHandler } from "express-serve-static-core";

export const allCharacters: RequestHandler = async (req, res) => {
  const {
    name: character,
    page = 1,
    status,
    species,
    type,
    gender,
  } = req.query;

  try {
    //By name
    if (character) {
      const result = await axios.get(
        `${process.env.API}/character?name=${character}`
      );
      return res.json(result.data);
    }

    let filterValues = `${process.env.API}/character?page=${page}`;

    if (character) filterValues = filterValues.concat(`&name=${character}`);
    if (status) filterValues = filterValues.concat(`&status=${status}`);
    if (species) filterValues = filterValues.concat(`&species=${species}`);
    if (type) filterValues = filterValues.concat(`&type=${type}`);
    if (gender) filterValues = filterValues.concat(`&gender=${gender}`);

    //By page
    const result = await axios.get(filterValues);
    return res.json(result.data);
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
    res.json(error);
  }
};
