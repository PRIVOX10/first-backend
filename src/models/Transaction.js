const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    productid: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
    totalPrice: Number,
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = { Transaction };
