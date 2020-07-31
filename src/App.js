import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tabla de Integrantes</h1>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Correos</th>
              <th>Teléfono</th>
              <th>Tipo Documento</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Paola Andrea</td>
              <td>Hernández Velásquez</td>
              <td>cmtecnica09@elpoli.edu.co</td>
              <td>33093909043</td>
              <td>119198998</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>amet</td>
              <td>consectetur</td>
              <td>adipiscing</td>-+
              <td>elit</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>Integer</td>
              <td>nec</td>
              <td>odio</td>
              <td>Praesent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
