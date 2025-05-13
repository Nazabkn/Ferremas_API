import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Contacto() {
  return (
    <Container fluid className="mt-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col md={8} className="bg-white p-4 rounded shadow-sm">
          <h2 className="text-center text-warning mb-4">Contacto Comercial</h2>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="text-center text-primary">Contáctanos para compras al por mayor o consultas</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Email:</strong> contacto@ferremas.com
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Teléfono:</strong> +56 9 1234 5678
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Horario:</strong> Lunes a Viernes, 09:00 a 18:00 hrs
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <div className="text-center">
            <Link to="/" className="btn btn-warning text-dark mt-3">
              Volver a la tienda
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contacto;
