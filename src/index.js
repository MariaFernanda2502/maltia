import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPantalla from './Pantallas/LoginPantalla/LoginPantalla';
import Desactivar from './Componentes/desactivar/desactivar';
import Buscador from './Componentes/Buscador/Buscador';
import AdminNuevoAsesor from './Pantallas/AdminNuevoAsesor/AdminNuevoAsesor';

import EditarPrestatario from './Pantallas/editarPrestatario/editarPrestatario';
import EditarPrestatario2 from './Pantallas/editarPrestatario2/editarPrestatario2'
import ProspectoPantalla from './Pantallas/prospectoPantalla/prospectoPantalla';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
