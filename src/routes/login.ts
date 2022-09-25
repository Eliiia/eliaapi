import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

import { User } from "../db/User";
import { jwtSecret } from "../config";

export default async function login(req: Request, res: Response) {
    if (!req.body.username)
        return res.status(400).send({ err: "Missing Username" });
    if (!req.body.password)
        return res.status(400).send({ err: "Missing Password" });

    const users = await User.find({ username: req.body.username });
    const user = users[0];

    if (!user) return res.status(401).send({ err: "User not found" });
    if (!(await bcrypt.compare(req.body.password, user.password)))
        return res.status(401).send({ err: "Incorrect Password" });

    let token = sign({ sub: user._id }, jwtSecret, { algorithm: "RS256" });

    res.status(200).send({ token: token });
}
