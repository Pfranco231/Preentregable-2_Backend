const express = require('express');
const router = express.Router();
const ProductManager = require('../managers/ProductManager');

const productsFilePath = './src/JSON/products.json';
const productManager = new ProductManager(productsFilePath);

router.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts', { products: productManager.getAllProducts() });
});

router.get('/home', (req, res) => {
    res.render('home', { products: productManager.getAllProducts() });
});

module.exports = router;