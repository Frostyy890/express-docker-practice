import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql",
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
});
