import app from "./app";
import config from "./config/config";
import "./db";

app.listen(config.PORT, () => {
  console.log(`Server listen in port ${config.PORT}`);
});
