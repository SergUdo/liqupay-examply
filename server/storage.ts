import { transactions, type Transaction, type InsertTransaction } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { nanoid } from 'nanoid';

export interface IStorage {
  createTransaction(data: InsertTransaction): Promise<Transaction>;
  getTransaction(reference: string): Promise<Transaction | undefined>;
  updateTransactionStatus(reference: string, status: string): Promise<Transaction>;
}

export class DatabaseStorage implements IStorage {
  async createTransaction(data: InsertTransaction): Promise<Transaction> {
    const reference = nanoid();
    const [transaction] = await db
      .insert(transactions)
      .values({
        ...data,
        reference,
        status: "pending",
      })
      .returning();
    return transaction;
  }

  async getTransaction(reference: string): Promise<Transaction | undefined> {
    const [transaction] = await db
      .select()
      .from(transactions)
      .where(eq(transactions.reference, reference));
    return transaction;
  }

  async updateTransactionStatus(reference: string, status: string): Promise<Transaction> {
    const [transaction] = await db
      .update(transactions)
      .set({ status })
      .where(eq(transactions.reference, reference))
      .returning();

    if (!transaction) {
      throw new Error("Transaction not found");
    }

    return transaction;
  }
}

export const storage = new DatabaseStorage();