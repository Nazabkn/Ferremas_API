const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Registro
router.post('/registro', (req, res) => {
  const { nombre, correo, contrasena } = req.body;

  if (!nombre || !correo || !contrasena) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const query = 'INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)';
  db.query(query, [nombre, correo, contrasena], (err, result) => {
    if (err) {
      console.error('Error al registrar:', err.message);
      return res.status(500).json({ error: 'Error al registrar el usuario' });
    }
    res.json({ mensaje: 'Usuario registrado correctamente' });
  });
});

// Login
router.post('/login', (req, res) => {
  const { correo, contrasena } = req.body;

  if (!correo || !contrasena) {
    return res.status(400).json({ error: 'Correo y contraseña son requeridos' });
  }

  const query = 'SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?';
  db.query(query, [correo, contrasena], (err, results) => {
    if (err) {
      console.error('Error en login:', err.message);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    res.json({ mensaje: 'Login exitoso', usuario: results[0] });
  });
});

module.exports = router;
