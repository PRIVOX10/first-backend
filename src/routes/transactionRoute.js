const express = require("express");
const TransactionController = require("../controllers/transactionController");

const router = express.Router();
router.post("/", TransactionController.create);
router.get("/", TransactionController.getAll);
router.get("/:id", TransactionController.getOne);
router.put("/:id", TransactionController.updateStatus);

module.exports = router;
