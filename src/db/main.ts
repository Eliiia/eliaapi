import mongoose from "mongoose";
import { dbName } from "../config";

export default async function start() {
    await mongoose.connect(`mongodb://localhost:27017/${dbName}`);
    console.log(
        `Connected to mongoose database @ mongodb://localhost:27017/${dbName}`,
    );
}
