import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

export const corebcv = new Sequelize({
  dialect: (process.env.DATABASE_DIALECT as any) || "postgres",
  host: process.env.DATABASE_HOST || "localhost",
  port: Number(process.env.DATABASE_PORT) || 5432,
  database: process.env.DATABASE_NAME || "postgres",
  username: process.env.DATABASE_USER || "postgres",
  password: process.env.DATABASE_PASSWORD || "postgres",
  schema: process.env.DATABASE_SCHEMA || "public",
  ssl: process.env.DATABASE_SSL === "true",
});
