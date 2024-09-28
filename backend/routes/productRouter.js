const express = require('express');

const { getProduct, getSingleProduct } = require('../controller/productController');
const authUser = require('../middleware/auth');

const router = express.Router();

// Fetch all products
router.get('/', getProduct);

// Fetch a specific product by ID
router.get('/:id', getSingleProduct );

module.exports = router;
