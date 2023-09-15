const express = require("express");
const product = express.Router();
const {
  getAllProducts,
  getAllCategories,
  getOneProduct,
} = require("../queries/productQuery.js");

// INDEX - show all products

product.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  if (allProducts[0]) {
    res.status(200).json(allProducts);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// INDEX - show all products

product.get("/categories", async (req, res) => {
  const allCategories = await getAllCategories();
  if (allCategories[0]) {
    res.status(200).json(allCategories);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

// Show one product by id

product.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { error, result } = await getOneProduct(id);
  if (error?.code === 0) {
    res.status(404).json({ error: "Product Not Found" });
  } else if (error) {
    res.status(500).json({ error: "Server Error" });
  } else {
    res.status(200).json(result);
  }
});

module.exports = product;
