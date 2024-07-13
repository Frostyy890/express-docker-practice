import { mysqlTable, serial, varchar, boolean } from "drizzle-orm/mysql-core";

export const test = mysqlTable("test", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  completed: boolean("completed").notNull().default(false),
});
