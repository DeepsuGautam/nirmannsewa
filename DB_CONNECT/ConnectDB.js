import mongoose from "mongoose";

const dbURL = process.env.NEXT_APP_DB;

const ConnectDB = async () => {
  try {
    await mongoose.connect(dbURL || "mongodb://127.0.0.1:27017/nirmann");
    mongoose.connection.setMaxListeners(100);

    mongoose.connection.on("error", (error) => {
      console.log(error);
    });
    mongoose.connection.once("open", () => {
      console.log("Connected DB!");
    });

    return mongoose;
  } catch (error) {
    console.log(error);
  }
};

export default ConnectDB;
