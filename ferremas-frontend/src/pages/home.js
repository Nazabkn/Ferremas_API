// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FiltroSidebar from '../components/FiltroSidebar'; 
import ProductoList from '../components/ProductoList';
import productosMock from '../mock/productos'; 

function Home() {
  const [productos, setProductos] = useState([]);
  const [filtros, setFiltros] = useState({ categoria: '', precio: null, busqueda: '' });

  useEffect(() => {
    let filtrados = productosMock;

    if (filtros.categoria) {
      filtrados = filtrados.filter(p => p.categoria === filtros.categoria);
    }

    if (filtros.precio) {
      filtrados = filtrados.filter(p => p.precio <= filtros.precio);
    }

    if (filtros.busqueda) {
      filtrados = filtrados.filter(p => 
        (p.nombre && p.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase())) ||
        (p.descripcion && p.descripcion.toLowerCase().includes(filtros.busqueda.toLowerCase())) // Comprobamos si `descripcion` existe
      );
    }

    setProductos(filtrados);
  }, [filtros]);

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={3}>
          <FiltroSidebar setFiltros={setFiltros} />
        </Col>
        <Col md={9}>
          <ProductoList productos={productos} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
