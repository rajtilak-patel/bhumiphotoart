const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
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

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
