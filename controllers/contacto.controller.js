const db = require('../config/db');

const enviarMensaje = (req, res) => {
  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  db.query(
    'INSERT INTO mensajes_contacto (nombre, email, mensaje) VALUES (?, ?, ?)',
    [nombre, email, mensaje],
    (err, result) => {
      if (err) {
        console.error('Error al guardar mensaje:', err);
        return res.status(500).json({ error: 'Error en la base de datos' });
      }

      res.json({ mensaje: 'Gracias por contactarte, te responderemos pronto.' });
    }
  );
};

module.exports = { enviarMensaje };
