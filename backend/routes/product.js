const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);  // Respond with JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch a specific product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
