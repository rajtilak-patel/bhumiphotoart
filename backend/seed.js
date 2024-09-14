const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/photoArtStore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = [
  {
    name: 'Sunset over the Mountains',
    description: 'A beautiful sunset captured over the mountains.',
    price: 100,
    imageUrl: 'https://example.com/sunset.jpg',
  },
  {
    name: 'City Skyline at Night',
    description: 'A stunning view of the city skyline at night.',
    price: 150,
    imageUrl: 'https://example.com/city.jpg',
  },
  {
    name: 'Ocean Waves',
    description: 'A peaceful view of waves crashing onto the shore.',
    price: 75,
    imageUrl: 'https://example.com/ocean.jpg',
  },
  // Add more products as needed
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Database seeded!');
  mongoose.connection.close();
};

module.exports = seedDB;
