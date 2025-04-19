import type { RootFilterQuery } from "mongoose";
import monsterModel from "../models/monsters/monster.model";
import { IMonster } from "../models/monsters/types";
import { IFetchAllReq, IPaginatedObj } from "@sharedTypes/index";

const monsterService = {
  getAllMonsters: async (
    req: IFetchAllReq
  ): Promise<IPaginatedObj<IMonster>> => {
    const query: RootFilterQuery<IMonster> = {
      $or: [
        { name: { $regex: req.search || "", $options: "i" } },
        { description: { $regex: req.search || "", $options: "i" } },
      ],
    };

    const monsters = await monsterModel
      .find(query)
      .sort({ [req.field]: req.order })
      .skip(req.page * 10)
      .limit(10);
    const totalElements = await monsterModel.countDocuments(query);
    return {
      content: monsters,
      totalElements,
      totalPages: Math.ceil(totalElements / 10),
    };
  },
};

export default monsterService;
