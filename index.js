require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const pagosRoutes = require('./routes/pagos.routes');
const conversionRoutes = require('./routes/conversion.routes');
const soapRoutes = require('./routes/soap.routes');
const contactoRoutes = require('./routes/contacto.routes');
const cors = require ('cors');
const usuariosRoutes = require('./routes/usuarios.routes');

app.use(cors());
// Middlewares
app.use(express.json());

app.use('/api/usuarios', usuariosRoutes);

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


app.use('/api/soap', soapRoutes);


app.use('/api/contacto', contactoRoutes);
// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
