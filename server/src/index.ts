import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {
  CLIENT_URL,
  MONGO_DATABASE,
  MONGO_ROOT_PASSWORD,
  MONGO_ROOT_USER,
  PORT,
} from "./config/config";
import monsterRouter from "./routes/monster.route";

const corsOptions = {
  origin: CLIENT_URL,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const app = express();

const main = async () => {
  try {
    await mongoose.connect(
      `mongodb://${MONGO_ROOT_USER}:${MONGO_ROOT_PASSWORD}@127.0.0.1:27017/${MONGO_DATABASE}?authSource=admin`
    );
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    return console.log(err);
  }
};

app.use("*", cors(corsOptions));
app.use("/api/monsters", monsterRouter);

main();
