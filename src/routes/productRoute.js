const express = require("express");
const ProductController = require("../controllers/productController");

const router = express.Router();
router.post("/", ProductController.create);
router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getOne);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.remove);

module.exports = router;
