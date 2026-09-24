const { Transaction } = require("../models/Transaction");

class TransactionController {
  async create(req, res) {
    try {
      const { productid, quantity, totalPrice } = req.body;

      if (productid && quantity && totalPrice) {
        const newTransaction = await Transaction.create({
          userid: req.user?._id,
          productid,
          quantity,
          totalPrice,
        });

        res.status(201).json({
          message: "transaction created successfully",
          data: newTransaction,
        });
      } else {
        res.status(400).json({
          message: "inputs are required",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  }

  async getAll(req, res) {
    try {
      const transactions = await Transaction.find()
        .populate("userid")
        .populate("productid");

      res.status(200).json({
        message: "transactions fetched successfully",
        data: transactions,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  }

  async getOne(req, res) {
    try {
      const transaction = await Transaction.findById(req.params.id)
        .populate("userid")
        .populate("productid");

      if (!transaction) {
        return res.status(404).json({ message: "transaction not found" });
      }

      res.status(200).json({
        message: "transaction fetched successfully",
        data: transaction,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  }

  async updateStatus(req, res) {
    try {
      const { status } = req.body;

      const transaction = await Transaction.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      );

      if (!transaction) {
        return res.status(404).json({ message: "transaction not found" });
      }

      res.status(200).json({
        message: "transaction updated successfully",
        data: transaction,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  }
}

module.exports = new TransactionController();
