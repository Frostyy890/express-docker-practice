import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { config } from "src/config";

const poolConnection = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  database: config.db.database,
  password: config.db.password,
  port: config.db.port,
});
const db = drizzle(poolConnection);

async function main() {
  console.log("Running migrations...");
  await migrate(db, { migrationsFolder: "src/db/migrations" });
  console.log("Done!");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
