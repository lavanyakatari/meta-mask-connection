import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  hash: { type: String, required: true, unique: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  value: { type: String, required: true },
  timestamp: { type: Date, required: true },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
