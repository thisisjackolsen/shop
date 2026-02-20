require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productsRouter = require('./routes/products');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productsRouter);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/eshop')
  .then(() => {
    console.log('Mongo connected');
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch(err => {
    console.error('DB connection error', err);
    process.exit(1);
  });
