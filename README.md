# Proyecto de Productos en Tiempo Real

Este proyecto es una aplicación de gestión de productos en tiempo real utilizando WebSockets.

## Librerías Utilizadas

- [Express](https://expressjs.com/)
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Socket.io](https://socket.io/)
- [Nodemon (para produccion)](https://www.npmjs.com/package/nodemon)

## Instalación

1. Clona el repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Instala las dependencias utilizando npm:

   ```sh
   npm install


## Uso

1. Ejecuta el servidor:

   ```sh
    node main.js


2. Abre tu navegador y navega a las siguientes direcciones:

Para ver la lista de productos en tiempo real y gestionar productos (agregar y eliminar):

http://localhost:8080/realtimeproducts

Para ver la lista de productos agregados hasta el momento

http://localhost:8080/home



## Descripción
1. main.js: Configura el servidor Express, Handlebars y Socket.io.
2. socket.js: Maneja la configuración de Socket.io y los eventos de agregar y eliminar productos.
3. ProductManager.js: Clase para gestionar los productos (agregar, eliminar, obtener todos).
4. views.js: Define las rutas para las vistas.
5. home.hbs: Vista que muestra la lista de productos agregados hasta el momento.
6. realTimeProducts.hbs: Vista que muestra la lista de productos en tiempo real y permite agregar y eliminar productos.


##### Nota: Este proyecto esta basado en el preentregable 1