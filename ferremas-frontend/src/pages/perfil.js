import React, { useEffect, useState } from 'react';

function Perfil() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h2>Perfil del Usuario</h2>
      {usuario ? (
        <div>
          <p><strong>Nombre:</strong> {usuario.nombre}</p>
          <p><strong>Correo:</strong> {usuario.correo}</p>
        </div>
      ) : (
        <p>No has iniciado sesión.</p>
      )}
    </div>
  );
}

export default Perfil;
