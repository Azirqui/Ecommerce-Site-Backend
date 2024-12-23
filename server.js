const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;
require('dotenv').config();
const authRoute = require('./routes/auth');
// Import the products route
const productsRoute = require('./routes/products');

// Middleware
app.use(express.json());
app.use(cors(
    {
        origin: ['https://peach-tree-frontend-fw2xxocxx-ch-noman-ahmads-projects.vercel.app/'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }
));

// Use the products route with the /api prefix
app.use('/api/products', productsRoute);
app.use('/api', authRoute);

// MongoDB Atlas Connection String
const uri = process.env.MONGO_URI
mongoose.connect(uri)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Database connection error:', err));

// Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

module.exports = app;