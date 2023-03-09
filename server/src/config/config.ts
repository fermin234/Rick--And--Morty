import dotenv from "dotenv";
dotenv.config();

const { USER, PASSWORD, DB_NAME, DB_HOST, PORT, API } = process.env;
console.log(USER, PASSWORD, DB_NAME, DB_HOST, PORT, API);

export default {
  USER,
  PASSWORD,
  DB_NAME,
  DB_HOST,
  PORT,
  API_KEY: API,
};
