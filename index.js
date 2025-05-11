require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const pagosRoutes = require('./routes/pagos.routes');
const conversionRoutes = require('./routes/conversion.routes');

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

app.use('/api/pagos', pagosRoutes);


app.use('/api/productos', conversionRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${port}`);
});
