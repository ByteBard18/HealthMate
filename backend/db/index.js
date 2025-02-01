import mongoose from "mongoose";
import { DB_NAME } from "../CONSTANTS.js";

const connectDb = async () => {
    try {
        const DB_URI = process.env.DB_URI
        const connectionInstance = await mongoose.connect(`${DB_URI}/${DB_NAME}`)

        console.log(`Connected to DB: ${connectionInstance.connection.db.databaseName}`)
    } catch (error) {
        console.log("MongoDB connection error", error)      
        process.exit(1)
    }
}

export default connectDb