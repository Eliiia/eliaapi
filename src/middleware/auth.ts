import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { adminPw, jwtSecret } from "../config";

export default function auth(req: Request, res: Response, next: NextFunction) {
    if (req.path.startsWith("/register") || req.path.startsWith("/login"))
        return next();

    if (!req.headers.authorization) return res.status(401).send();

    const auth = req.headers.authorization.split(" ")[1];

    if (req.headers.authorization.startsWith("Bearer ")) {
        try {
            const u = verify(auth, jwtSecret);
            req.user = u.sub;
        } catch (err: any) {
            switch (err.message) {
                case "jwt expired":
                    return res.status(401).send({ err: "Token Expired" });
                case "jwt malformed" || "invalid signature":
                    return res.status(401).send({ err: "Invalid Token" });
            }
        }
    } else return res.status(400).send();

    next();
}
