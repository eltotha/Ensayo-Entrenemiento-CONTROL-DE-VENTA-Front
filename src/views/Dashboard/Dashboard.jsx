import React from 'react';
import { StyledCard, StatCard } from './Dashboard_Styles';

export default function Dashboard() {
  return (
    <section>
      <h2 className="mb-4">Panel Principal</h2>
      <div className="row g-4">
        <div className="col-md-3">
          <StatCard $bgColor="#2563eb"><h5>Ventas del Día</h5><h2>C$ 8,500</h2></StatCard>
        </div>
        <div className="col-md-3">
          <StatCard $bgColor="#16a34a"><h5>Productos</h5><h2>150</h2></StatCard>
        </div>
        <div className="col-md-3">
          <StatCard $bgColor="#f97316"><h5>Proveedores</h5><h2>12</h2></StatCard>
        </div>
        <div className="col-md-3">
          <StatCard $bgColor="#7c3aed"><h5>Clientes</h5><h2>86</h2></StatCard>
        </div>
      </div>
      <StyledCard className="mt-4 p-4">
        <h5>Resumen reciente</h5>
        <table className="table mt-3">
          <thead><tr><th>Actividad</th><th>Fecha</th><th>Estado</th></tr></thead>
          <tbody>
            <tr><td>Venta realizada</td><td>27/05/2026</td><td><span className="badge bg-success">Completado</span></td></tr>
            <tr><td>Nuevo proveedor registrado</td><td>27/05/2026</td><td><span className="badge bg-primary">Activo</span></td></tr>
            <tr><td>Producto bajo en stock</td><td>27/05/2026</td><td><span className="badge bg-warning text-dark">Revisar</span></td></tr>
          </tbody>
        </table>
      </StyledCard>
    </section>
  );
}