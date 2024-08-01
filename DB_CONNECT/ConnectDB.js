import mongoose from "mongoose";

const dbURL = process.env.MONGO_URL || "mongodb+srv://karnorr:karnorr123@nepatronix.6abei4i.mongodb.net/nirmann_sewa";

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const ConnectDB = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(dbURL).then((mongoose) => {
            mongoose.connection.setMaxListeners(20);

            mongoose.connection.on("error", (error) => {
                console.log(error);
            });

            mongoose.connection.once("open", () => {
                console.log("Connected to DB!");
            });

            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
};

export default ConnectDB;
