const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRouter');
const productRoutes = require('./routes/productRouter');
const orderRoutes = require('./routes/orderRouter');
const cartRoutes = require('./routes/cartRouter');
const seedDB = require('./seed');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/photoArtStore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

// seedDB()
// Routes
app.use('/api/auth', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
