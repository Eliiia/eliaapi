import { Express, json } from "express";

import morgan from "morgan";
import bodyParser from "body-parser";

export default (app: Express) => {
    app.use(json({ limit: "10kb" }));

    app.use(morgan(":status :method :url :remote-addr; :response-time[3]ms"));
    app.use(bodyParser.json());
};
