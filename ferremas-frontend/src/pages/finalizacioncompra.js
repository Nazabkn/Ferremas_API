import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FinalizacionCompra = () => {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const total = carrito.reduce((acc, item) => acc + item.precio, 0); 

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">¡Compra Exitosa!</Card.Title>
              <Card.Text className="text-center">Gracias por tu compra, aquí está tu recibo:</Card.Text>
              <ul>
                {carrito.map((item, index) => (
                  <li key={index}>
                    {item.nombre} - ${item.precio}
                  </li>
                ))}
              </ul>
              <h3 className="text-center">Total: ${total}</h3>
              <div className="text-center mt-4">
                <Button variant="success" className="w-50" as={Link} to="/">
                  Volver al inicio
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FinalizacionCompra;
