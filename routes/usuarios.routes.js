const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Registro
router.post('/registro', (req, res) => {
  const { nombre, correo, contrasena } = req.body;

  const query = 'INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)';
  db.query(query, [nombre, correo, contrasena], (err, result) => {
    if (err) {
      console.error('Error al registrar:', err.message);
      return res.status(500).json({ error: 'Error en la BD' });
    }
    res.json({ mensaje: 'Usuario registrado correctamente' });
  });
});

// Login
router.post('/login', (req, res) => {
  const { correo, contrasena } = req.body;

  const query = 'SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?';
  db.query(query, [correo, contrasena], (err, results) => {
    if (err) {
      console.error('Error en login:', err.message);
      return res.status(500).json({ error: 'Error en la BD' });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    res.json({ mensaje: 'Login exitoso', usuario: results[0] });
  });
});

module.exports = router;
