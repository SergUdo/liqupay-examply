import { Transaction, InsertTransaction } from "@shared/schema";

const LIQUPAY_API_KEY = process.env.LIQUPAY_API_KEY || "test_key";
const LIQUPAY_SECRET = process.env.LIQUPAY_SECRET || "test_secret";
const LIQUPAY_API = "https://api.liqupay.com/v1";

export async function initializePayment(data: InsertTransaction): Promise<{reference: string, authorizationUrl: string}> {
  const response = await fetch(`${LIQUPAY_API}/transaction/initialize`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${LIQUPAY_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      amount: data.amount,
      email: data.email,
      currency: data.currency,
      callback_url: `${process.env.APP_URL}/api/webhook`,
      metadata: data.metadata
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to initialize payment');
  }

  const result = await response.json();
  return {
    reference: result.reference,
    authorizationUrl: result.authorization_url
  };
}

export async function verifyTransaction(reference: string): Promise<{status: string}> {
  const response = await fetch(`${LIQUPAY_API}/transaction/verify/${reference}`, {
    headers: {
      'Authorization': `Bearer ${LIQUPAY_API_KEY}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to verify transaction');
  }

  const result = await response.json();
  return {
    status: result.status
  };
}
