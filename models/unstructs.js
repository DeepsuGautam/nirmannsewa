import { Schema, models, model } from "mongoose";
const schema = new Schema({
  relation: {
    type: String,
    unique: true,
    required: true,
  },
  title: String,
  description: String,
  content: String,
  facebook: String,
  instagram: String,
  twitter: String,
  linkedin: String,
  email: String,
  phone: String,
  location: String,
  addiData: Object,
});

const unstruct = models?.unstruct || model("unstruct", schema);
export default unstruct;
