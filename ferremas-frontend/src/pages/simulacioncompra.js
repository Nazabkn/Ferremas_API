
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SimulacionCompra = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="mx-auto">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center text-warning">Simulación de Compra</Card.Title>
              <Card.Text className="text-center">
                aca prueba poner el webpay.
              </Card.Text>
              <Card.Text className="text-center text-muted">
                Este es un proceso simulado, no se realizan pagos reales al menos por ahora.
              </Card.Text>
              <div className="text-center mt-4">
                <Link to="/finalizacion-compra">
                  <Button variant="success" className="w-100">
                    Finalizar Compra
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SimulacionCompra;
