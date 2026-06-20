const mongoose = require('mongoose');
const Product = require('./models/Product');

const MONGO_URI = 'mongodb://alishbaawan890_db_user:dAacu6ayCzWMQkSL@ac-ikmadxj-shard-00-00.bmfkw2x.mongodb.net:27017,ac-ikmadxj-shard-00-01.bmfkw2x.mongodb.net:27017,ac-ikmadxj-shard-00-02.bmfkw2x.mongodb.net:27017/myshop?ssl=true&replicaSet=atlas-j192wk-shard-0&authSource=admin&appName=Cluster0';

const products = [
  {
    name: 'Sneakers',
    price: 45,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300',
    category: 'Footwear',
    description: 'Comfortable running sneakers',
    stock: 15
  },
  {
    name: 'Backpack',
    price: 60,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
    category: 'Bags',
    description: 'Spacious travel backpack',
    stock: 10
  },
  {
    name: 'Watch',
    price: 120,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
    category: 'Accessories',
    description: 'Elegant wrist watch',
    stock: 8
  },
  {
    name: 'Sunglasses',
    price: 30,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300',
    category: 'Accessories',
    description: 'Stylish sunglasses',
    stock: 20
  },
  {
    name: 'Lipstick Set',
    price: 25,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300',
    category: 'Cosmetics',
    description: 'Matte lipstick collection',
    stock: 18
  },
  {
    name: 'Makeup Palette',
    price: 40,
    image: 'https://images.unsplash.com/photo-1583241475880-083f84372725?w=300',
    category: 'Cosmetics',
    description: 'Eyeshadow palette',
    stock: 12
  },
  {
    name: 'Floral Dress',
    price: 55,
    image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=300',
    category: 'Women Wear',
    description: 'Beautiful summer dress',
    stock: 14
  },
  {
    name: 'Women Handbag',
    price: 70,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300',
    category: 'Women Wear',
    description: 'Elegant leather handbag',
    stock: 9
  },
  {
    name: 'Men Shirt',
    price: 35,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300',
    category: 'Men Wear',
    description: 'Casual cotton shirt',
    stock: 16
  },
  {
    name: 'Men Jacket',
    price: 80,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300',
    category: 'Men Wear',
    description: 'Stylish denim jacket',
    stock: 11
  }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('MongoDB Connected!');
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products Added!');
    mongoose.connection.close();
  })
  .catch((err) => console.log('Error:', err));