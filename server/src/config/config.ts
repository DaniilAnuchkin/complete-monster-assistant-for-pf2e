import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const PORT = process.env.PORT || 3000;
export const MONGO_ROOT_USER = process.env.MONGO_ROOT_USER;
export const MONGO_ROOT_PASSWORD = process.env.MONGO_ROOT_PASSWORD;
export const MONGO_DATABASE = process.env.MONGO_DATABASE;
export const CLIENT_URL = process.env.CLIENT_URL;
export const NODE_ENV = process.env.NODE_ENV;
