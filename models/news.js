import { Schema, models, model } from "mongoose";
const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image:{
    type:String,
    required:true
  }
});

const news = models?.news || model("news", schema);
export default news;
