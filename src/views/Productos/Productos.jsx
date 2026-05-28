import React from 'react';
import { StyledCard } from './Productos_Styles';

export default function Productos() {
  return (
    <section>
      <h2 className="mb-4">Productos</h2>
      <StyledCard className="p-4 mb-4">
        <h5>Agregar Producto</h5>
        <div className="row g-3 mt-2">
          <div className="col-md-3"><input className="form-control" placeholder="Código" /></div>
          <div className="col-md-3"><input className="form-control" placeholder="Nombre" /></div>
          <div className="col-md-3"><input className="form-control" placeholder="Categoría" /></div>
          <div className="col-md-3"><input className="form-control" type="number" placeholder="Precio" /></div>
          <div className="col-md-3"><input className="form-control" type="number" placeholder="Stock" /></div>
          <div className="col-md-3"><input className="form-control" placeholder="Proveedor" /></div>
          <div className="col-md-3"><button className="btn btn-main w-100">Guardar Producto</button></div>
        </div>
      </StyledCard>
      <StyledCard className="p-4">
        <h5>Lista de Productos</h5>
        <table className="table table-hover mt-3">
          <thead><tr><th>Código</th><th>Producto</th><th>Categoría</th><th>Precio</th><th>Stock</th></tr></thead>
          <tbody>
            <tr><td>P001</td><td>Arroz 1 lb</td><td>Granos básicos</td><td>C$ 25</td><td>50</td></tr>
            <tr><td>P002</td><td>Aceite 1 litro</td><td>Abarrotes</td><td>C$ 95</td><td>30</td></tr>
          </tbody>
        </table>
      </StyledCard>
    </section>
  );
}