import { Request, Response } from "express";
import bcrypt from "bcrypt";

import { User } from "../db/User";
import { saltRounds } from "../config";

export default async function register(req: Request, res: Response) {
    if (!req.body.username)
        return res.status(400).send({ err: "Missing Username" });
    if (!req.body.password)
        return res.status(400).send({ err: "Missing Password" });

    const user = new User({
        username: req.body.username,
        password: hash(req.body.password),
    });

    user.save();

    res.status(204).send();
}

function hash(pw: string) {
    return bcrypt.hashSync(pw, saltRounds);
}
