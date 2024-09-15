const Order = require('../models/OrderModel');

const createOrder = async (req, res) => {
    const { userId, products, totalAmount } = req.body;
    const newOrder = new Order({ userId, products, totalAmount });
    await newOrder.save();
    res.json({ message: 'Order placed successfully' });
  }

  module.exports = {
    createOrder
  }