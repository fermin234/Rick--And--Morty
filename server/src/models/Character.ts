import { Schema, model, Document } from "mongoose";

export interface ICharacter extends Document {
  _apiID?: Number;
  name: String;
  status: String;
  gender: String;
  species?: String;
  type?: String;
  image?: String;
  origin_name?: String;
  origin_url?: String;
  location_name?: String;
  location_url?: String;
}

const characterSchema = new Schema<ICharacter>({
  _apiID: {
    type: Number,
  },
  name: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    enum: ["Alive", "Dead", "Unknown"],
    require: true,
  },
  gender: {
    type: String,
    enum: ["Female", "Male", "Genderless", "Unknown"],
    require: true,
  },
  species: {
    type: String,
  },
  type: {
    type: String,
  },
  image: {
    type: String,
    default: "",
  },
  origin_name: {
    type: String,
  },
  origin_url: {
    type: String,
  },
  location_name: {
    type: String,
  },
  location_url: {
    type: String,
  },
});

export default model<ICharacter>("Character", characterSchema);
