import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const test = mysqlTable("test", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
});