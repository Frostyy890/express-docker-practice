import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { migrate } from "drizzle-orm/mysql2/migrator";

const poolConnection = mysql.createPool({
  host: "localhost",
  user: "test_user",
  database: "express_docker_practice",
  password: "test_password_123",
  port: 3306,
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
