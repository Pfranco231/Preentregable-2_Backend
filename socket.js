const { Server } = require('socket.io');
const ProductManager = require('./src/managers/ProductManager');

const productsFilePath = './src/JSON/products.json';
const productManager = new ProductManager(productsFilePath);
let io;

function initializeSocket(httpServer) {
    io = new Server(httpServer);
    io.on('connection', (socket) => {
        console.log('Nuevo cliente conectado');

        socket.on('addProduct', (product) => {
            const newProduct = productManager.addProduct(product);
            io.emit('productUpdate', productManager.getAllProducts());
        });

        socket.on('deleteProduct', (productId) => {
            productManager.deleteProduct(parseInt(productId));
            io.emit('productUpdate', productManager.getAllProducts());
        });
    });
}

function getSocketIO() {
    if (!io) {
        throw new Error('Socket.io no está inicializado');
    }
    return io;
}

module.exports = { initializeSocket, getSocketIO };