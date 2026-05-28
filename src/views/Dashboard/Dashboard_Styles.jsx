import styled from 'styled-components';

export const StyledCard = styled.div`
  background: white;
  border: none;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.06);
`;

export const StatCard = styled.div`
  color: white;
  border-radius: 18px;
  padding: 20px;
  background-color: ${props => props.$bgColor || '#2563eb'};
`;