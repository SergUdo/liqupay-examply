import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTransactionSchema } from "@shared/schema";
import { initializePayment, verifyTransaction } from "./liqupay";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/payment/initialize", async (req, res) => {
    try {
      const data = insertTransactionSchema.parse(req.body);
      const transaction = await storage.createTransaction(data);
      const paymentDetails = await initializePayment(data);
      
      await storage.updateTransactionStatus(paymentDetails.reference, "initialized");
      
      res.json(paymentDetails);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/payment/verify/:reference", async (req, res) => {
    try {
      const { reference } = req.params;
      const { status } = await verifyTransaction(reference);
      const transaction = await storage.updateTransactionStatus(reference, status);
      res.json(transaction);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.post("/api/webhook", async (req, res) => {
    try {
      const { reference, status } = req.body;
      await storage.updateTransactionStatus(reference, status);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ message: "Webhook processing failed" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
