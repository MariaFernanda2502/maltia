import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Componentes/Login/Login';
import Compromiso from './Componentes/catalogoCompromiso/catalogoCompromiso';
import Contactos from './Componentes/CatalogoContactos/CatalogoContactos';
import Departamentos from './Componentes/catalogoDepartamentos/catalogoDepartamentos';
import Desactivar from './Componentes/desactivar/desactivar';
ReactDOM.render(
  <React.StrictMode>
    <Desactivar />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
