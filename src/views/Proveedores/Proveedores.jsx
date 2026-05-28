import React from 'react';
import { StyledCard } from './Proveedores_Styles';

export default function Proveedores() {
  return (
    <section>
      <h2 className="mb-4">Proveedores</h2>
      <StyledCard className="p-4 mb-4">
        <h5>Registrar Proveedor</h5>
        <div className="row g-3 mt-2">
          <div className="col-md-4"><input className="form-control" placeholder="Nombre del proveedor" /></div>
          <div className="col-md-4"><input className="form-control" placeholder="Teléfono" /></div>
          <div className="col-md-4"><input className="form-control" placeholder="Correo" /></div>
          <div className="col-md-6"><input className="form-control" placeholder="Dirección" /></div>
          <div className="col-md-3"><input className="form-control" placeholder="Producto que suministra" /></div>
          <div className="col-md-3"><button className="btn btn-main w-100">Guardar Proveedor</button></div>
        </div>
      </StyledCard>
      <StyledCard className="p-4">
        <h5>Lista de Proveedores</h5>
        <table className="table table-hover mt-3">
          <thead><tr><th>Nombre</th><th>Teléfono</th><th>Correo</th><th>Producto</th><th>Estado</th></tr></thead>
          <tbody>
            <tr><td>Distribuidora León</td><td>8888-0000</td><td>ventas@leon.com</td><td>Abarrotes</td><td><span className="badge bg-success">Activo</span></td></tr>
            <tr><td>Proveedor Central</td><td>7777-0000</td><td>central@mail.com</td><td>Bebidas</td><td><span className="badge bg-success">Activo</span></td></tr>
          </tbody>
        </table>
      </StyledCard>
    </section>
  );
}