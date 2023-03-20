import dotenv from "dotenv";
dotenv.config();

const { USER, PASSWORD, DB_NAME, DB_HOST, PORT, API, DB_DEPLOY } = process.env;

export default {
  USER,
  PASSWORD,
  DB_NAME,
  DB_HOST,
  PORT,
  API_KEY: API,
  DB_DEPLOY,
};
