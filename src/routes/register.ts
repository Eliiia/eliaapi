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
        currency: 0,
    });

    try {
        await user.save();
    } catch (err: any) {
        if (err.code == 11000)
            return res.status(401).send({ err: "Username Used" });
        else throw err;
    }

    res.status(204).send();
}

function hash(pw: string) {
    return bcrypt.hashSync(pw, saltRounds);
}
