import { mysqlTable, mysqlEnum, timestamp, varchar, serial } from "drizzle-orm/mysql-core";

export const userTable = mysqlTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 100 }).notNull().unique(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  password: varchar("password", { length: 100 }).notNull(),
  role: mysqlEnum("role", ["user", "admin", "super_admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
