import { Schema, models, model } from "mongoose";
const schema = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const message = models?.contact || model("contact", schema);
export default message;
