import React from 'react';
import { SidebarWrapper, SidebarHeader, SidebarTitle, ToggleButton, StyledNavLink } from './Sidebar_Styles';

export default function Sidebar({ isOpen, setIsOpen }) {
  const navItems = [
    { path: '/dashboard', icon: 'bi-speedometer2', label: 'Panel Principal' },
    { path: '/ventas', icon: 'bi-cart-check', label: 'Ventas' },
    { path: '/productos', icon: 'bi-box-seam', label: 'Productos' },
    { path: '/proveedores', icon: 'bi-truck', label: 'Proveedores' },
    { path: '/clientes', icon: 'bi-people', label: 'Clientes' },
    { path: '/inventario', icon: 'bi-clipboard-data', label: 'Inventario' },
    { path: '/reportes', icon: 'bi-bar-chart-line', label: 'Reportes' },
  ];

  return (
    <SidebarWrapper $isOpen={isOpen}>
      <SidebarHeader $isOpen={isOpen}>
        <SidebarTitle $isOpen={isOpen}>
          <i className="bi bi-shop me-2"></i> Mi Sistema
        </SidebarTitle>
        <ToggleButton onClick={() => setIsOpen(!isOpen)}>
          <i className="bi bi-list"></i>
        </ToggleButton>
      </SidebarHeader>

      <nav className="nav flex-column">
        {navItems.map((item, index) => (
          <StyledNavLink key={index} to={item.path} $isOpen={isOpen}>
            <i className={`bi ${item.icon}`}></i> 
            <span>{item.label}</span>
          </StyledNavLink>
        ))}
      </nav>
    </SidebarWrapper>
  );
}