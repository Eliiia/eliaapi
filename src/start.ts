import express, { NextFunction, Request, Response } from "express";
import { port } from "./config";
import db from "./db/db";

db();

const app = express();

import routes from "./routes";
import middleware from "./middleware";

middleware(app);
routes(app);

app.get("*", (req, res) => {
    res.status(404).send();
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send({ error: `${err.name}: ${err.message}` });
});

app.listen(port, () => {
    console.log(`\nRunning on http://localhost:${port}!`);
});
