import mongoose from "mongoose";
import config from "./config/config";

(async () => {
  mongoose.set("strictQuery", false);
  const db = await mongoose.connect(
    // `mongodb://${config.DB_HOST}/${config.DB_NAME}`
    "mongodb://mongo:pmyFjRpwHTlUQZVAw0gQ@containers-us-west-59.railway.app:6763"
  );
  console.log(`Connection stablished to DB: ${db.connection.name}`);
})();

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("mongoDB connection stablished");
});

connection.on("error", (error) => {
  console.log(error);
  process.exit(0);
});
