const { Product } = require("../models/Product");

class ProductController {
  async create(req, res) {
    try {
      const { productName, productRating, productPicture, productPrice } =
        req.body;

      if (productName && productPrice) {
        const newProduct = await Product.create({
          productName,
          productRating,
          productPicture,
          productPrice,
          userid: req.user?._id,
        });

        res.status(201).json({
          message: "product created successfully",
          data: newProduct,
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
      const products = await Product.find();
      res.status(200).json({
        message: "products fetched successfully",
        data: products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  }

  async getOne(req, res) {
    try {
      const product = await Product.findById(req.params.id);

      if (!product) {
        return res.status(404).json({ message: "product not found" });
      }

      res.status(200).json({
        message: "product fetched successfully",
        data: product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  }

  async update(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      if (!product) {
        return res.status(404).json({ message: "product not found" });
      }

      res.status(200).json({
        message: "product updated successfully",
        data: product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  }

  async remove(req, res) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);

      if (!product) {
        return res.status(404).json({ message: "product not found" });
      }

      res.status(200).json({ message: "product deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "error" });
    }
  }
}

module.exports = new ProductController();
