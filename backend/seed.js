const mongoose = require('mongoose');
const Product = require('./models/product');
require('dotenv').config();

const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/eshop';

const data = [
  { name: 'Red T-Shirt', description: 'Comfortable cotton tee', price: 19.99, image: '', stock: 12 },
  { name: 'Blue Jeans', description: 'Slim fit denim', price: 49.99, image: '', stock: 5 },
  { name: 'Sneakers', description: 'Sporty shoes', price: 79.99, image: '', stock: 7 }
];

mongoose.connect(MONGO).then(async () => {
  await Product.deleteMany({});
  await Product.insertMany(data);
  console.log('Seeded products');
  mongoose.disconnect();
}).catch(err => {
  console.error(err);
});
