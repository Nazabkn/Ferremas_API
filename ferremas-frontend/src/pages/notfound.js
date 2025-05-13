import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 className="display-4 text-danger">404</h1>
          <p className="lead">Por aqui no hay nada</p>
          <Link to="/">
            <Button variant="warning" className="text-dark mt-3">
              Volver al inicio
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
