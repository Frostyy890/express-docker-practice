import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { config } from "../config";
import * as schema from "./schemas/test.schema";

export const poolConnection = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  database: config.db.database,
  password: config.db.password,
  port: config.db.port,
});
export const db = drizzle(poolConnection, { schema, mode: "default" });
