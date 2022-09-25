import mongoose from "mongoose";
import { dbName, dbHost } from "../config";

export default function start() {
    console.log("Connecting to mongoose database...");
    mongoose.connect(`mongodb://${dbHost}/${dbName}`);
    console.log(`Connected to mongoose database @ ${dbHost}/${dbName}`);
}
