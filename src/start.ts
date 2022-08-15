import express from "express";
import { port } from "./config";

const app = express();

app.get("*", (req, res) => {
    res.send();
});

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}!`);
});
