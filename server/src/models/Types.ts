import { Schema, model, Document } from "mongoose";

export interface ITypes extends Document {
  name: String;
}

const typesSchema = new Schema<ITypes>({
  name: {
    type: String,
    require: true,
  },
});

export default model<ITypes>("Types", typesSchema);
