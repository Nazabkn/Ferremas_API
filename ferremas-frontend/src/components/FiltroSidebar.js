
import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function FiltroSidebar({ setFiltros }) {
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState(50000);
  const [busqueda, setBusqueda] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    setFiltros({ categoria, precio, busqueda });
  };

  return (
    <Card className="p-3 mb-3">
      <h5>Buscar Productos</h5>
      <Form onSubmit={manejarSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </Form.Group>

        <h5>Filtrar por</h5>
        <Form.Group className="mb-2">
          <Form.Label>Categoría</Form.Label>
          <Form.Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Todas</option>
            <option value="Herramientas">Herramientas</option>
            <option value="Pinturas">Pinturas</option>
            <option value="Electricidad">Electricidad</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Precio máximo</Form.Label>
          <div className="d-flex justify-content-between">
            <Form.Range
              min="1000"
              max="50000"
              step="500"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
            <span>${precio}</span> {}
          </div>
        </Form.Group>

        <Button type="submit" className="btn-warning w-100 text-dark mt-2">
          Aplicar Filtros
        </Button>
      </Form>
    </Card>
  );
}

export default FiltroSidebar;
