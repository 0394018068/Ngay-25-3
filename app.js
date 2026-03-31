const express = require('express');
const app = express();
const connectDB = require('./config/db');

app.use(express.json());

// connect DB
connectDB();

// routes
app.use('/products', require('./routes/productRoutes'));
app.use('/inventory', require('./routes/inventoryRoutes'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});