import { Schema, models, model } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  occupation:{
    type:String,
    required:true,
  },
  description: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const teams = models?.team || model("team", schema);
export default teams;
