import { Schema, model, Document } from "mongoose";

export interface ICharacter extends Document {
  _apiID?: Number;
  name: String;
  status: String;
  gender: String;
  species?: String;
  type?: String;
  image?: String;
  origin?: {
    name: String;
    url: String;
  };
  location?: {
    name: String;
    url: String;
  };
  episode?: [];
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
  origin: {
    name: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  location: {
    name: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  episode: {
    type: Array,
  },
});

export default model<ICharacter>("Character", characterSchema);
