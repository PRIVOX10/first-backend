const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  productRating: Number,
  productPicture: String,
  productPrice: Number,
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Product = mongoose.model("Product", productSchema);
module.exports = { Product };
