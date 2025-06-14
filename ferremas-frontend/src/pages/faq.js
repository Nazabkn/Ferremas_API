import React, { useState } from 'react';

const preguntas = [
  {
    pregunta: '¿Cómo puedo comprar un producto?',
    respuesta: 'Agrega productos al carrito y haz clic en "Simular compra" para iniciar el proceso.'
  },
  {
    pregunta: '¿Aceptan pagos con Webpay?',
    respuesta: 'Sí, usamos Webpay en modo test para pagos seguros con tarjetas.'
  },
  {
    pregunta: '¿Puedo retirar en tienda?',
    respuesta: 'Sí, puedes seleccionar retiro en tienda al finalizar la compra.'
  },
  {
    pregunta: '¿Dónde están ubicados?',
    respuesta: 'Nuestra tienda principal está en Santiago Centro. Mira el mapa en la sección "Mapa".'
  }
];

function FAQ() {
  const [activa, setActiva] = useState(null);

  const togglePregunta = (index) => {
    setActiva(activa === index ? null : index);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: 'auto' }}>
      <h2>Preguntas Frecuentes (FAQ)</h2>
      {preguntas.map((item, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <button
            onClick={() => togglePregunta(index)}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '1rem',
              backgroundColor: '#000000',
              border: '1px solid #ccc',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {item.pregunta}
          </button>
          {activa === index && (
            <div style={{ padding: '1rem', border: '1px solid #ccc', borderTop: 'none' }}>
              {item.respuesta}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
