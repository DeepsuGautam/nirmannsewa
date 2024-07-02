import { Schema, models, model } from "mongoose";
import { type } from "os";

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

const blogs = models?.blog || model("blog", schema);
export default blogs;
