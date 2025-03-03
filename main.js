const express = require('express');
const { createServer } = require('http');
const { engine } = require('express-handlebars');
const path = require('path');
const { initializeSocket } = require('./socket');

const app = express();
const port = 8080;
const httpServer = createServer(app);

app.use(express.json());

// Configurar Handlebars
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const productsRouter = require('./src/routes/products');
const cartsRouter = require('./src/routes/carts');
const viewsRouter = require('./src/routes/views');

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/', viewsRouter);

initializeSocket(httpServer);

httpServer.listen(port, () => {
    console.log(`Servidor encendido en el puerto ${port} --- http://localhost:${port}`);
});

module.exports = app;