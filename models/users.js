const { Schema, models, model } = require("mongoose");

const schema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["admin", "user"],
        default:"user"
    }
});

const user = models?.user || model("user", schema);
export default user