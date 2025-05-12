const db = require('../config/db');

// GET /api/productos
const getProductos = (req, res) => {
  db.query(
    'SELECT id, codigo_producto, codigo_marca, nombre, marca, modelo, precio, stock FROM productos',
    (err, rows) => {
      if (err) return res.status(500).json({ error: 'Error en la BD' });

      const productos = rows.map(p => ({
        codigo_producto : p.codigo_producto,
        codigo_marca    : p.codigo_marca,
        marca           : p.marca,
        modelo          : p.modelo,
        nombre          : p.nombre,
        stock           : p.stock,
        precios         : [
          {
            fecha : new Date().toISOString(),
            valor : p.precio
          }
        ]
      }));

      res.json(productos);
    }
  );
};

module.exports = { getProductos };
