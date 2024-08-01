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
  image: {
    type: String,
    required: true,
  },
  status:{
    type:String,
    required:true,
    enum:["completed", "ongoing"]
  }
});

const projects = models?.project || model("project", schema);
export default projects;
