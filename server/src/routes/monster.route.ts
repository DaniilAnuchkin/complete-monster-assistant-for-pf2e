import { Router } from "express";
import monsterController from "../controllers/monster.controller";

const monsterRouter = Router();

monsterRouter.get("/", monsterController.getMonsters);

export default monsterRouter;
