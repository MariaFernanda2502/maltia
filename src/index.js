import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProspectoPantalla from './Pantallas/prospectoPantalla/prospectoPantalla';
import LoginPantalla from './Pantallas/LoginPantalla/LoginPantalla';
import Compromiso from './Componentes/catalogoCompromiso/catalogoCompromiso';
import Contactos from './Componentes/CatalogoContactos/CatalogoContactos';
import Departamentos from './Componentes/catalogoDepartamentos/catalogoDepartamentos';
import Desactivar from './Componentes/desactivar/desactivar';
import FlechaOpciones from './Componentes/FlechaOpciones';
import Buscador from './Componentes/Buscador/Buscador';
import AdminNuevoAsesor from './Pantallas/AdminNuevoAsesor/AdminNuevoAsesor';
import EditarPrestatario from './Pantallas/editarPrestatario/editarPrestatario';
import EditarPrestatario2 from './Pantallas/editarPrestatario2/editarPrestatario2'
ReactDOM.render(
  <React.StrictMode>
    <EditarPrestatario2/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
