import React from 'react';
import ProductoCard from './ProductoCard';
import { Row, Col } from 'react-bootstrap';

const ProductoList = ({ productos }) => {
  return (
    <Row>
      {productos.map((producto) => (
        <Col key={producto.id} md={6} lg={4}>
          <ProductoCard producto={producto} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductoList;
