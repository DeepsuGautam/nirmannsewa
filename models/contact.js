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
  date:{
    type:Date,
    required:true,
    default: function(){
      const date = new Date().getTime()
      return date;
    }
  },
  active:{
    type:Boolean,
    required:true,
    default:true
  }
});

const message = models?.contact || model("contact", schema);
export default message;
