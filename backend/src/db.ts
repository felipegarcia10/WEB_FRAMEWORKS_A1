import mongoose from "mongoose";

export async function connectDb(uri: string) {
    await mongoose.connect(uri);
    console.log("database connected");
}

export async function disconnectDb() {
    await mongoose.disconnect();
    console.log("database disconnected");
}