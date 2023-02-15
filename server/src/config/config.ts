import dotenv from "dotenv";
dotenv.config();

const { USER, PASSWORD, DB_NAME, DB_HOST, PORT, API_KEY } = process.env;

export default {
  USER,
  PASSWORD,
  DB_NAME,
  DB_HOST,
  PORT,
  API_KEY,
};
