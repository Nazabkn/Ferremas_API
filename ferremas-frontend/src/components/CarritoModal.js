import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useCarrito } from '../context/CarritoContext';
import { Link } from 'react-router-dom';

const CarritoModal = ({ onClose, show }) => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();

 
  const manejarVaciarCarrito = () => {
    vaciarCarrito();
    onClose();  
  };

  
  const manejarContinuarCompra = () => {
    onClose();  
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {carrito.length > 0 ? (
          <ul className="list-group">
            {carrito.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{item.nombre} - ${item.precio}</span>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Eliminar
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay items en el carrito.</p>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
        {carrito.length > 0 && (
          <Button variant="danger" onClick={manejarVaciarCarrito}>
            Vaciar carrito
          </Button>
        )}
        {}
        {carrito.length > 0 && (
          <Link 
            to="/carrito" 
            className="btn btn-warning w-100 text-dark mt-3"
            onClick={manejarContinuarCompra}  // Cierra el modal al hacer clic
          >
            Continuar Compra
          </Link>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CarritoModal;
