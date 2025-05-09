const express = require('express');
const app = express ();
const port = 3000;

app.use(express.json());

//Principal ruta
app.get('/', (req, res) => {
    res.send('Ferreteria Ferremas');
});

//Rutas para productos

app.get('/api/productos', (req, res) => {
    res.json([
        { id: 1, nombre: 'Martillo', precio:
4990 },
        { id: 2, nombre: 'Taladro inhalambrico', precio:
36990}
    ]);
});

//inicio servidor
app.listen (port, ()=> {
    console.log(`Servidor escuchando en 
   https://localhost:${port}`);
});