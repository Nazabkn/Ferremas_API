import React, { useState } from 'react';
import axios from 'axios';

function Registro() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    contrasena: ''
  });

  const [registrado, setRegistrado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND}/api/usuarios/registro`, form);
      setRegistrado(true);
      setForm({ nombre: '', correo: '', contrasena: '' });
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('No se pudo registrar el usuario');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label><br />
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        /><br /><br />

        <label>Correo electrónico:</label><br />
        <input
          type="email"
          name="correo"
          value={form.correo}
          onChange={handleChange}
          required
        /><br /><br />

        <label>Contraseña:</label><br />
        <input
          type="password"
          name="contrasena"
          value={form.contrasena}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Registrarse</button>
      </form>

      {registrado && <p style={{ color: 'green' }}>✅ Usuario registrado correctamente</p>}
    </div>
  );
}

export default Registro;
