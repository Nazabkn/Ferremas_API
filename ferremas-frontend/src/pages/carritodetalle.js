
import React from 'react';
import { useCarrito } from '../context/CarritoContext';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CarritoDetalle = () => {
  const { carrito } = useCarrito();
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <Container fluid className="mt-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col md={8} className="bg-white p-4 rounded shadow-sm">
          <h2 className="text-center text-warning mb-4">Detalle del Carrito</h2>

          {carrito.length === 0 ? (
            <div className="text-center">
              <p>No hay productos en tu carrito.</p>
              <Link to="/" className="btn btn-warning text-dark mt-3">
                Volver a la tienda
              </Link>
            </div>
          ) : (
            <div>
              <ListGroup>
                {carrito.map((producto, index) => (
                  <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                    <span>{producto.nombre}</span>
                    <span>${producto.precio}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <div className="d-flex justify-content-between mt-4">
                <h4>Total:</h4>
                <h4>${total}</h4>
              </div>

              <div className="text-center mt-4">
                <Link to="/simulacion-compra">
                  <Button variant="warning" className="text-dark w-100">
                    Comprar por webpay
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CarritoDetalle;
