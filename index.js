require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

// Importar rutas
const productosRoutes = require('./routes/productos.routes');

// Rutas
app.use('/api/productos', productosRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.send('Ferretería FERREMAS');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${port}`);
});
