import { migrate } from "drizzle-orm/mysql2/migrator";
import { poolConnection, db } from "./connection";

async function main() {
  console.log("Running migrations...");
  await migrate(db, { migrationsFolder: "src/db/migrations" });
  console.log("Done!");
  await poolConnection.end();
  console.log("Connection closed.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
