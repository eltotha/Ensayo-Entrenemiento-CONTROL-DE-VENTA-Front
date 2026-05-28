import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyles/GlobalStyles';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './views/Dashboard/Dashboard';
import Ventas from './views/Ventas/Ventas';
import Productos from './views/Productos/Productos';
import Proveedores from './views/Proveedores/Proveedores';
import Clientes from './views/Clientes/Clientes';
import Inventario from './views/Inventario/Inventario';
import Reportes from './views/Reportes/Reportes';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
`;

const MainContent = styled.main`
  margin-left: ${props => (props.$isOpen ? '270px' : '80px')};
  padding: 25px;
  flex-grow: 1;
  min-height: 100vh;
  transition: margin-left 0.3s ease;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> 
        <MainContent className="content" $isOpen={isOpen}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/proveedores" element={<Proveedores />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/reportes" element={<Reportes />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}