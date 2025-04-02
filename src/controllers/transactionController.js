import Transaction from "../models/transactionModel.js";

// 🔹 Create (POST) a new transaction
export const createTransaction = async (req, res) => {
  try {
    const { hash, from, to, value, timestamp } = req.body;

    const existingTx = await Transaction.findOne({ hash });
    if (existingTx)
      return res.status(400).json({ message: "Transaction already exists" });

    const transaction = new Transaction({ hash, from, to, value, timestamp });
    await transaction.save();

    res
      .status(201)
      .json({ message: "Transaction saved successfully", transaction });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Get (GET) all transactions
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔹 Get (GET) transactions for a specific MetaMask address
export const getTransactionsByAddress = async (req, res) => {
  try {
    const { address } = req.params;
    const transactions = await Transaction.find({
      $or: [{ from: address }, { to: address }],
    });

    if (transactions.length === 0) {
      return res
        .status(404)
        .json({ message: "No transactions found for this address" });
    }

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
