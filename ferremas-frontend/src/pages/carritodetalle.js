import React from 'react';
import { useCarrito } from '../context/CarritoContext';
import axios from 'axios';

function CarritoDetalle() {
  const { carrito, eliminarDelCarrito } = useCarrito();

  // Calcular el total del carrito con validación
  const totalCarrito = carrito.reduce((acc, item) => {
    const precio = Number(item.precio) || 0;
    const cantidad = Number(item.cantidad) || 1;
    return acc + (precio * cantidad);
  }, 0);

  // Función para pagar con Webpay
  const pagarConWebpay = async () => {
    // Validación extra
    if (isNaN(totalCarrito) || totalCarrito <= 0) {
      alert('El total del carrito no es válido.');
      return;
    }

    console.log("Monto a pagar:", totalCarrito);

    try {
      const response = await axios.post(
        'http://localhost:8000/api/webpay/iniciar/',
        { monto: totalCarrito },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      const { url, token } = response.data;

      // Crear formulario dinámico para redirigir a Webpay
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = url;

      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'token_ws';
      input.value = token;

      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error('Error al iniciar Webpay:', error);
      alert('No se pudo procesar el pago.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🛒 Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul>
            {carrito.map((producto, index) => (
              <li key={index}>
                {producto.nombre} - ${producto.precio} x {producto.cantidad || 1}
                <button onClick={() => eliminarDelCarrito(producto)} style={{ marginLeft: '1rem' }}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <h3>Total: ${totalCarrito}</h3>

          <button
            onClick={pagarConWebpay}
            style={{
              padding: '1rem',
              background: '#198754',
              color: '#fff',
              border: 'none',
              marginTop: '1rem'
            }}
          >
            Pagar con Webpay 💳
          </button>
        </div>
      )}
    </div>
  );
}

export default CarritoDetalle;
