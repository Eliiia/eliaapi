import { Request, Response } from "express";
import { User } from "../db/User";

export default function register(req: Request, res: Response) {
    if (!req.body.username)
        return res.status(400).send({ err: "Missing Username" });
    if (!req.body.password)
        return res.status(400).send({ err: "Missing Password" });

    const user = new User({
        username: req.body.username,
        password: req.body.password,
    });

    user.save();

    res.status(204).send();
}
