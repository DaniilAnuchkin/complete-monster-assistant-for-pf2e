import { Request, Response } from "express";
import monsterService from "../services/monster.service";
import { IFetchAllReq } from "@sharedTypes/index";

const monsterController = {
  getMonsters: async (
    req: Request<{}, {}, {}, IFetchAllReq>,
    res: Response
  ) => {
    const monsters = await monsterService.getAllMonsters(req.query);
    res.send(monsters);
  },
};

export default monsterController;
