import apiInstance from "../apiInstance";
import { IMonster } from "./types";
import { IFetchAllReq, IPaginatedObj } from "@sharedTypes/index";

export const getMonsterList = async (params: IFetchAllReq) => {
  const response = await apiInstance.get<IPaginatedObj<IMonster>>("/monsters", {
    params,
  });

  return response.data;
};
