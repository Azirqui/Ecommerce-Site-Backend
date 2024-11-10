// const express = require('express');
// const Product = require('../models/Product');
// const router = express.Router();
// // Create a new product
// router.post('/', async (req, res) => {
//     const newProduct = new Product(req.body);
//     await newProduct.save();
//     res.status(201).json(newProduct);
// });

// // Get all products
// router.get('/', async (req, res) => {
//     const products = await Product.find();
//     res.json(products);
// });

// // Update a product
// router.put('/:id', async (req, res) => {
//     const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedProduct);
// });

// // Delete a product
// router.delete('/:id', async (req, res) => {
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Product deleted' });
// });

// // POST /api/products - Create a new product
// router.post('/', async (req, res) => {
//     try {
//         const newProduct = new Product(req.body);
//         await newProduct.save();
//         res.status(201).json(newProduct);
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to create product', error });
//     }
// });

// module.exports = router;

const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Create a new product
router.post('/', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create product', error });
    }
});

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products', error });
    }
});

// Update a product
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id.trim(); // Trim any extra spaces/newlines
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update product', error });
    }
});

// Delete a product
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id.trim(); // Trim any extra spaces/newlines
        const deletedProduct = await Product.findByIdAndDelete(id);
        
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully', deletedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete product', error });
    }
});

module.exports = router;
