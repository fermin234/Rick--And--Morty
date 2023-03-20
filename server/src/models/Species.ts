import { Schema, model, Document } from "mongoose";

export interface ISpecies extends Document {
  name: String;
}

const speciesSchema = new Schema<ISpecies>({
  name: {
    type: String,
    require: true,
  },
});

export default model<ISpecies>("Species", speciesSchema);
