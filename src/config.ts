import "dotenv/config";

export const port = process.env.PORT || 3000;

const adminPassword = process.env.ADMINPW ? process.env.ADMINPW : "password";
if (adminPassword == "password")
    console.log("RUNNING WITH 'password' AS PASSWORD");

export const adminPw = adminPassword;
