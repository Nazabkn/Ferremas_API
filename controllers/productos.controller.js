const db = require('../config/db');

// GET /api/productos
const getProductos = (req, res) => {
  const query = `
    SELECT id, codigo_producto, codigo_marca, nombre, marca, precio, stock
    FROM productos
  `;

  db.query(query, (err, rows) => {
    if (err) {
      console.error('Error al ejecutar la consulta SQL:', err.message);
      return res.status(500).json({ error: 'Error en la BD' });
    }

    const productos = rows.map(p => ({
      codigo_producto: p.codigo_producto,
      codigo_marca: p.codigo_marca,
      marca: p.marca,
      nombre: p.nombre,
      stock: p.stock,
      precios: [
        {
          fecha: new Date().toISOString(),
          valor: p.precio
        }
      ]
    }));

    res.json(productos);
  });
};

module.exports = { getProductos };
