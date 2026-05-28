import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background: #f4f6f9;
    font-family: 'Segoe UI', sans-serif;
  }

  .content {
    margin-left: 270px;
    padding: 25px;
  }

  .card {
    background: white;
    border: none;
    border-radius: 18px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.06);
  }

  .stat-card {
    color: white;
    border-radius: 18px;
    padding: 20px;
  }

  .bg-blue { background: #2563eb; }
  .bg-green { background: #16a34a; }
  .bg-orange { background: #f97316; }
  .bg-purple { background: #7c3aed; }

  .btn-main {
    background: #2563eb;
    color: white;
    border-radius: 10px;
    border: none;
    padding: 8px 16px;
    transition: 0.3s;
  }
  
  .btn-main:hover {
    background: #1d4ed8;
    color: white;
  }

  table th {
    background: #f8fafc;
  }

  @media (max-width: 768px) {
    .content {
      margin-left: 0;
    }
  }
`;