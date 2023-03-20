import { Schema, model, Document } from "mongoose";

export interface IOrigin extends Document {
  name: String;
  url: String;
}

const typesSchema = new Schema<IOrigin>({
  name: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
});

export default model<IOrigin>("Origin", typesSchema);
