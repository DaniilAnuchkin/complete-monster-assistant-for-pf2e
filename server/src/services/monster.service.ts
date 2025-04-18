import monsterModel from "../models/monsters/monster.model";
import { IMonster } from "../models/monsters/types";
import { IFetchAllReq, IPaginatedObj } from "@sharedTypes/index";

const monsterService = {
  getAllMonsters: async (
    req: IFetchAllReq
  ): Promise<IPaginatedObj<IMonster>> => {
    const monsters = await monsterModel
      .find()
      .sort({ createdAt: -1 })
      .skip(req.page * 10)
      .limit(10);
    const totalElements = await monsterModel.countDocuments();
    return {
      content: monsters,
      totalElements,
      totalPages: Math.ceil(totalElements / 10),
    };
  },
};

export default monsterService;
