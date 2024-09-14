const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{ productId: String, quantity: Number }],
  totalAmount: Number,
});

module.exports = mongoose.model('Order', orderSchema);
