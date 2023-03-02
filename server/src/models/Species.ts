import { Schema, model, Document } from "mongoose";

export interface ISpecies extends Document {
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

const speciesSchema = new Schema<ISpecies>({
  name: {
    type: String,
    require: true,
  },
});

export default model<ISpecies>("Species", speciesSchema);
