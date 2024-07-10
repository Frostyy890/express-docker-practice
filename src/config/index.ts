import dotenv from "dotenv";

dotenv.config({ path: ".env" });

enum Env {
  DEV = "development",
  PROD = "production",
  TEST = "test",
}

interface AppConfig {
  server: {
    port: number;
  };
  db: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
    url?: string;
  };
  env: Env;
}

function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
}

export const config: AppConfig = {
  server: {
    port: Number.parseInt(getEnvVar("PORT")),
  },
  db: {
    host: getEnvVar("DB_HOST"),
    port: Number.parseInt(getEnvVar("DB_PORT")),
    user: getEnvVar("DB_USER"),
    password: getEnvVar("DB_PASSWORD"),
    database: getEnvVar("DB_DATABASE"),
  },
  env: getEnvVar("NODE_ENV", "development") as Env,
};
