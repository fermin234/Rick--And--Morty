import app from "./app";
import config from "./config/config";
import axios from "axios";
import "./db";

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

app.listen(config.PORT, async () => {
  await axios.get(`/character`);
  await axios.get(`/species`);
  await axios.get(`/types`);
  await axios.get(`/origin`);
  console.log(`Server listen in port ${config.PORT}`);
});
