import "dotenv/config";

export const port = process.env.PORT || 3000;

const adminPassword = process.env.ADMINPW ? process.env.ADMINPW : "password";
if (adminPassword == "password")
    console.log("RUNNING WITH 'password' AS PASSWORD");

export const adminPw = adminPassword;

export const dbHost = process.env.DBHOST
    ? process.env.DBHOST
    : "localhost:27017";
export const dbName = process.env.DBNAME ? process.env.DBNAME : "eliaapi";

export const saltRounds = process.env.SALT ? process.env.SALT : 10;

if (!process.env.JWT_SECRET)
    throw Error(
        "No JWT_SECRET environment variable set. Generate it on your own, or use the /scripts/gen-secret.js script.",
    );
export const jwtSecret = process.env.JWT_SECRET;
