const axios = require('axios');
const db = require('../config/db');

const getProductosConvertidos = async (req, res) => {
  const moneda = req.query.moneda || 'dolar'; // valor por defecto

  try {
    // Obtener el valor de la moneda desde la API
    const response = await axios.get(`https://mindicador.cl/api/${moneda}`);
    const valor = response.data.serie[0].valor;

    // Obtener productos desde la base
    db.query('SELECT * FROM productos', (err, productos) => {
      if (err) {
        return res.status(500).json({ error: 'Error en la base de datos' });
      }

      const productosConvertidos = productos.map(p => ({
        ...p,
        [`precio_${moneda}`]: (p.precio / valor).toFixed(2)
      }));

      res.json(productosConvertidos);
    });
  } catch (error) {
    console.error('Error al obtener valor de moneda:', error.message);
    res.status(500).json({ error: `No se pudo convertir a ${moneda}` });
  }
};

module.exports = { getProductosConvertidos };
