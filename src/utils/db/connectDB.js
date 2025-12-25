import mongoose from "mongoose"



export const connectDB = async () => {
    const MONGODB_URI = process.env.DB_URI;

    const connection = mongoose.connection;

    if (connection.readyState >= 1) {
        console.log("Already connected to database");
        return;
    }

    const connect = await mongoose.connect(MONGODB_URI);
    console.log('DATABASE CONNECTED');
}