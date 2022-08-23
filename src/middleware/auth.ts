import { NextFunction, Request, Response } from "express";
import { adminPw } from "../config";

export default function auth(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) return res.status(401).send();

    const auth = req.headers.authorization.split(" ")[1];

    if (req.headers.authorization.startsWith("ADMIN ")) {
        if (auth == adminPw) req.user = "admin";
    } else res.status(400).send();

    next();
}
