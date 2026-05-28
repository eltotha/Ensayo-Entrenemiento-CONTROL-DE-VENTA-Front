import React from 'react';
import { StyledCard } from './Inventario_Styles';

export default function Inventario() {
  return (
    <section>
      <h2 className="mb-4">Inventario</h2>
      <StyledCard className="p-4">
        <h5>Control de Inventario</h5>
        <table className="table table-hover mt-3">
          <thead><tr><th>Producto</th><th>Entrada</th><th>Salida</th><th>Stock Actual</th><th>Estado</th></tr></thead>
          <tbody>
            <tr><td>Arroz 1 lb</td><td>100</td><td>50</td><td>50</td><td><span className="badge bg-success">Disponible</span></td></tr>
            <tr><td>Aceite 1 litro</td><td>40</td><td>10</td><td>30</td><td><span className="badge bg-success">Disponible</span></td></tr>
            <tr><td>Azúcar 1 lb</td><td>20</td><td>18</td><td>2</td><td><span className="badge bg-danger">Bajo stock</span></td></tr>
          </tbody>
        </table>
      </StyledCard>
    </section>
  );
}