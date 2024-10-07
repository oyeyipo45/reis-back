import { config } from "dotenv";
config({ path: `.env` });

export const { NODE_ENV, PORT, USERNAME, PASSWORD, DB_NAME } = process.env;
