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
