import mongoose from "mongoose";
import { IMonster } from "./types";

const monsterSchema = new mongoose.Schema<IMonster>(
  {
    name: String,
    description: String,
    image: String,
  },
  { timestamps: true }
);

const monsterModel = mongoose.model("Monster", monsterSchema);

export default monsterModel;
