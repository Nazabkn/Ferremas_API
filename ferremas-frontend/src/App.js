import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Header from './components/header';
import Home from './pages/home';
import CarritoDetalle from './pages/carritodetalle';
import Contacto from './pages/contacto';
import SimulacionCompra from './pages/simulacioncompra';
import FinalizacionCompra from './pages/finalizacioncompra';
import NotFound from './pages/notfound'; // página 404
import Login from './pages/login';
import Registro from './pages/registro';
import Mapa from './pages/mapa';
import FAQ from './pages/faq';
import Perfil from './pages/perfil';





function App() {
  return (
    <CarritoProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<CarritoDetalle />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/simulacion-compra" element={<SimulacionCompra />} />
          <Route path="/finalizacion-compra" element={<FinalizacionCompra />} />
          <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;
