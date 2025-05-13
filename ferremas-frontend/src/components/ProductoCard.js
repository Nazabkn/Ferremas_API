import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useCarrito } from '../context/CarritoContext';

const ProductoCard = ({ producto }) => {
  const { agregarAlCarrito } = useCarrito();

  const handleAgregar = () => {
    agregarAlCarrito(producto);
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Card.Text className="fw-bold">${producto.precio}</Card.Text>
        <Button onClick={handleAgregar} variant="warning" className="text-dark w-100">
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductoCard;
