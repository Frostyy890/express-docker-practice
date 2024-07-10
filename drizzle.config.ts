import { defineConfig } from "drizzle-kit";
import { config } from "src/config";

export default defineConfig({
  dialect: "mysql",
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dbCredentials: {
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
  },
});
