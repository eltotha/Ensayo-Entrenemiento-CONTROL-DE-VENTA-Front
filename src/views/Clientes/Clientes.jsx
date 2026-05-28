import React from 'react';
import { StyledCard } from './Clientes_Styles';

export default function Clientes() {
  return (
    <section>
      <h2 className="mb-4">Clientes</h2>
      <StyledCard className="p-4 mb-4">
        <h5>Registrar Cliente</h5>
        <div className="row g-3 mt-2">
          <div className="col-md-4"><input className="form-control" placeholder="Nombre completo" /></div>
          <div className="col-md-4"><input className="form-control" placeholder="Teléfono" /></div>
          <div className="col-md-4"><input className="form-control" placeholder="Correo" /></div>
          <div className="col-md-8"><input className="form-control" placeholder="Dirección" /></div>
          <div className="col-md-4"><button className="btn btn-main w-100">Guardar Cliente</button></div>
        </div>
      </StyledCard>
      <StyledCard className="p-4">
        <h5>Lista de Clientes</h5>
        <table className="table table-hover mt-3">
          <thead><tr><th>Nombre</th><th>Teléfono</th><th>Correo</th><th>Dirección</th></tr></thead>
          <tbody>
            <tr><td>María López</td><td>8888-1111</td><td>maria@mail.com</td><td>León</td></tr>
            <tr><td>Carlos Ruiz</td><td>7777-2222</td><td>carlos@mail.com</td><td>Chinandega</td></tr>
          </tbody>
        </table>
      </StyledCard>
    </section>
  );
}