import React from 'react';
import { StyledCard } from './Ventas_Styles';

export default function Ventas() {
  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Ventas</h2>
        <button className="btn btn-main"><i className="bi bi-plus-circle"></i> Nueva Venta</button>
      </div>
      <StyledCard className="p-4 mb-4">
        <h5>Registrar Venta</h5>
        <div className="row g-3 mt-2">
          <div className="col-md-4"><input className="form-control" placeholder="Cliente" /></div>
          <div className="col-md-4"><input className="form-control" placeholder="Producto" /></div>
          <div className="col-md-2"><input className="form-control" type="number" placeholder="Cantidad" /></div>
          <div className="col-md-2"><input className="form-control" type="number" placeholder="Precio" /></div>
          <div className="col-md-4">
            <select className="form-select">
              <option>Método de pago</option>
              <option>Efectivo</option>
              <option>Transferencia</option>
              <option>Tarjeta</option>
            </select>
          </div>
          <div className="col-md-4"><input className="form-control" type="date" /></div>
          <div className="col-md-4"><button className="btn btn-main w-100">Guardar Venta</button></div>
        </div>
      </StyledCard>
      <StyledCard className="p-4">
        <h5>Listado de Ventas</h5>
        <table className="table table-hover mt-3">
          <thead><tr><th>#</th><th>Cliente</th><th>Producto</th><th>Total</th><th>Pago</th><th>Estado</th></tr></thead>
          <tbody>
            <tr><td>001</td><td>María López</td><td>Arroz</td><td>C$ 450</td><td>Efectivo</td><td><span className="badge bg-success">Pagado</span></td></tr>
            <tr><td>002</td><td>Carlos Ruiz</td><td>Aceite</td><td>C$ 320</td><td>Transferencia</td><td><span className="badge bg-success">Pagado</span></td></tr>
          </tbody>
        </table>
      </StyledCard>
    </section>
  );
}