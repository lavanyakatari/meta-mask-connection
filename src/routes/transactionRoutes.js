import express from "express";
import { createTransaction, getTransactions, getTransactionsByAddress } from "../controllers/transactionController.js";

const router = express.Router();

router.post("/transactions", createTransaction);  // Create a transaction
router.get("/transactions", getTransactions);  // Get all transactions
router.get("/transactions/:address", getTransactionsByAddress);  // Get transactions by wallet address

export default router;
