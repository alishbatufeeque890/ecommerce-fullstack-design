const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://alishbaawan890_db_user:dAacu6ayCzWMQkSL@ac-ikmadxj-shard-00-00.bmfkw2x.mongodb.net:27017,ac-ikmadxj-shard-00-01.bmfkw2x.mongodb.net:27017,ac-ikmadxj-shard-00-02.bmfkw2x.mongodb.net:27017/myshop?ssl=true&replicaSet=atlas-j192wk-shard-0&authSource=admin&appName=Cluster0';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.log('MongoDB Connection Error:', err));

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});