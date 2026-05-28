import React from 'react';
import { StyledCard } from './Reportes_Styles';

export default function Reportes() {
  return (
    <section>
      <h2 className="mb-4">Reportes</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <StyledCard className="p-4">
            <h5>Reporte de Ventas</h5>
            <p>Ventas totales del mes: <strong>C$ 85,000</strong></p>
            <p>Producto más vendido: <strong>Arroz 1 lb</strong></p>
            <button className="btn btn-main mt-2">Generar Reporte</button>
          </StyledCard>
        </div>
        <div className="col-md-6">
          <StyledCard className="p-4">
            <h5>Reporte de Inventario</h5>
            <p>Productos registrados: <strong>150</strong></p>
            <p>Productos con bajo stock: <strong>5</strong></p>
            <button className="btn btn-main mt-2">Generar Reporte</button>
          </StyledCard>
        </div>
      </div>
    </section>
  );
}