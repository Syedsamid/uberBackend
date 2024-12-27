import mongoose from "mongoose";
import config from "config";

async function dbConnect(){
    try{
        let DB_URL = config.get("DB_URL")
        await mongoose.connect(DB_URL)
        console.log("Database connected successfully");
    } catch(error){
        console.log(error)
    }
}
dbConnect()