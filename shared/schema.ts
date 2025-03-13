import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const transactions = pgTable("transactions", {
  id: serial("id").primaryKey(),
  amount: integer("amount").notNull(),
  currency: text("currency").notNull().default("NGN"),
  email: text("email").notNull(),
  reference: text("reference").notNull().unique(),
  status: text("status").notNull().default("pending"),
  metadata: text("metadata"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertTransactionSchema = createInsertSchema(transactions)
  .pick({
    amount: true,
    email: true,
    currency: true,
    metadata: true,
  })
  .extend({
    amount: z.number().min(100).max(10000000),
    email: z.string().email(),
    currency: z.enum(["NGN", "USD", "GBP", "EUR"]),
    metadata: z.string().optional(),
  });

export type InsertTransaction = z.infer<typeof insertTransactionSchema>;
export type Transaction = typeof transactions.$inferSelect;
