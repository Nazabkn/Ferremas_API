import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { useCarrito } from '../context/CarritoContext';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import CarritoModal from './CarritoModal'; // Importar el modal

function Header() {
  const { carrito } = useCarrito();
  const [showModal, setShowModal] = useState(false); // Estado para controlar el modal

  const handleShowModal = () => setShowModal(true); // Función para mostrar el modal
  const handleCloseModal = () => setShowModal(false); // Función para cerrar el modal

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-warning">
            FERREMAS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="text-light">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/contacto" className="text-light">
                Contacto
              </Nav.Link>
              <Nav.Link as={Link} to="/registro" className="text-light">
                Registro
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="text-light">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/simulacion-compra" className="text-light">
                Simular Compra
              </Nav.Link>
              <Nav.Link as={Link} to="/finalizacion-compra" className="text-light">
                Finalizar
              </Nav.Link>
            </Nav>
            <Button variant="outline-warning" onClick={handleShowModal}>
              <FaShoppingCart size={18} />{' '}
              <Badge bg="danger">{carrito.length}</Badge>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CarritoModal onClose={handleCloseModal} show={showModal} />
    </>
  );
}

export default Header;
