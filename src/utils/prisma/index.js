import { PrismaClient } from "../../../prisma/generated/client/index.js";

export const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
  errorFormat: "pretty",
});
