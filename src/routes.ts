import { Express } from "express";

import register from "./routes/register";
import login from "./routes/login";

import { walletInfo } from "./routes/wallet";

export default (app: Express) => {
    app.post("/register/", (req, res) => register(req, res));
    app.post("/login/", (req, res) => login(req, res));

    app.get("/wallet/info", (req, res) => walletInfo(req, res));
};
