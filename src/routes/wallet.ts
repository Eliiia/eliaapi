import { Request, Response } from "express";

import { User } from "../db/User";

export async function walletInfo(req: Request, res: Response) {
    const user = (await User.find({ username: req.user }).exec())[0];

    res.status(200).send({ balance: user.currency });
}
