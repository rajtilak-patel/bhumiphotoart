const Product = require('../models/Product');

const getProduct = async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);  // Respond with JSON
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

//   get single product
  const getSingleProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);  // Respond with JSON
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  module.exports = {
    getProduct,
    getSingleProduct
  }