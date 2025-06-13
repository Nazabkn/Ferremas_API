import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [logueado, setLogueado] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/usuarios/login', {
        correo,
        contrasena
      });

      setNombreUsuario(res.data.usuario.nombre);
      setLogueado(true);
      setCorreo('');
      setContrasena('');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Correo o contraseña incorrectos');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      {!logueado ? (
        <>
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <label>Correo:</label><br />
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            /><br /><br />

            <label>Contraseña:</label><br />
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            /><br /><br />

            <button type="submit">Entrar</button>
          </form>
        </>
      ) : (
        <h3>✅ Bienvenido, {nombreUsuario}!</h3>
      )}
    </div>
  );
}

export default Login;
