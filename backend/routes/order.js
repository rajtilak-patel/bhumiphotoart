const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, products, totalAmount } = req.body;
  const newOrder = new Order({ userId, products, totalAmount });
  await newOrder.save();
  res.json({ message: 'Order placed successfully' });
});

module.exports = router;
