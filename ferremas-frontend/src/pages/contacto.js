import React, { useState } from 'react';
import axios from 'axios';

function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/api/contacto', form);
      setEnviado(true);
      setForm({ nombre: '', correo: '', mensaje: '' });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('No se pudo enviar el mensaje. Intenta más tarde.');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label><br />
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        /><br /><br />

        <label>Correo:</label><br />
        <input
          type="email"
          name="correo"
          value={form.correo}
          onChange={handleChange}
          required
        /><br /><br />

        <label>Mensaje:</label><br />
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Enviar</button>
      </form>

      {enviado && <p style={{ color: 'green' }}>✅ Mensaje enviado correctamente</p>}
    </div>
  );
}

export default Contacto;
