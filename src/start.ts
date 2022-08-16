import express from "express";
import { port } from "./config";

const app = express();

import routes from "./routes";
import middleware from "./middleware";

middleware(app);
routes(app);

app.get("*", (req, res) => {
    res.status(404).send();
});

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}!`);
});
