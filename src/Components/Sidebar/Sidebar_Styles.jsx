import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarWrapper = styled.aside`
  min-height: 100vh;
  background: #1f2937;
  color: white;
  padding: 20px ${props => (props.$isOpen ? '15px' : '10px')};
  position: fixed;
  width: ${props => (props.$isOpen ? '250px' : '80px')};
  transition: width 0.3s ease, padding 0.3s ease;
  z-index: 1000;
  overflow-x: hidden;

  @media (max-width: 768px) {
    transform: ${props => (props.$isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    width: 250px;
    padding: 20px 15px;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.$isOpen ? 'space-between' : 'center')};
  margin-bottom: 30px;
  height: 40px;
`;

export const SidebarTitle = styled.h3`
  font-weight: bold;
  margin: 0;
  display: ${props => (props.$isOpen ? 'block' : 'none')};
  white-space: nowrap;
  font-size: 1.2rem;
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  
  &:hover { color: #3b82f6; }
`;

export const StyledNavLink = styled(NavLink)`
  color: #d1d5db;
  padding: 12px ${props => (props.$isOpen ? '15px' : '0')};
  border-radius: 10px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.$isOpen ? 'flex-start' : 'center')};
  text-decoration: none;
  white-space: nowrap;

  &:hover, &.active {
    background: #2563eb;
    color: white;
  }

  i {
    font-size: 1.2rem;
    margin-right: ${props => (props.$isOpen ? '10px' : '0')};
  }

  span {
    display: ${props => (props.$isOpen ? 'block' : 'none')};
  }
`;