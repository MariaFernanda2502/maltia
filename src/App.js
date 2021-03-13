import logo from './logo.svg';
import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import LoginPantalla from './Pantallas/LoginPantalla/LoginPantalla';
import AnalistaPrincipal from './Pantallas/AnalistaPrincipal/AnalistaPrincipal';
import AnalistaReportes from './Pantallas/AnalistaReportes/AnalistaReportes';
import AdminPrincipal from './Pantallas/AdminPrincipal/AdminPrincipal';
import AdminNuevoAsesor from './Pantallas/AdminNuevoAsesor/AdminNuevoAsesor';
import AdminNuevoAnalista from './Pantallas/AdminNuevoAnalista/AdminNuevoAnalista';
import AdminVerAnalistas from './Pantallas/AdminVerAnalistas/AdminVerAnalistas';
import AdminVerAsesores from './Pantallas/AdminVerAsesores/AdminVerAsesores';
import AdminEditarAsesor from './Pantallas/AdminEditarAsesor/AdminEditarAsesor';
import AdminEditarAnalista from './Pantallas/AdminEditarAnalista/AdminEditarAnalista';
import AsesorVerProspectos from './Pantallas/AsesorVerProspectos/AsesorVerProspectos';
import AnalistaVerPrestatarios from './Pantallas/AnalistaVerPrestatarios/AnalistaVerPrestatarios';
import EditarPrestatario2 from './Pantallas/editarPrestatario2/editarPrestatario2';

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/Asesor' exact>
          <AsesorVerProspectos />
        </Route>
        <Route path='/analista' exact>
          <AnalistaPrincipal />
        </Route>
        <Route path='/analista/ver-prestatarios' exact>
          <AnalistaVerPrestatarios />
        </Route>
        <Route path='/analista/ver-prestatarios/editar' exact>
          <EditarPrestatario2 />
        </Route>
        <Route path='/analista/reportes' exact>
          <AnalistaReportes />
        </Route>
        <Route path='/admin/nuevo-asesor' exact>
          <AdminNuevoAsesor />
        </Route>
        <Route path='/admin/editar-asesor' exact>
          <AdminEditarAsesor />
        </Route>
        <Route path='/admin/editar-analista' exact>
          <AdminEditarAnalista />
        </Route>
        <Route path='/admin/nuevo-analista' exact>
          <AdminNuevoAnalista />
        </Route>
        <Route path = '/admin/ver-asesores'>
          <AdminVerAsesores />
        </Route>
        <Route path = '/admin/ver-analistas'>
          <AdminVerAnalistas />
        </Route>
        <Route path='/admin' exact>
          <AdminPrincipal />
        </Route>
        <Route path='/noImplementado' exact>
          No hemos hecho nada aqui :c
        </Route>
        <Route path='/' exact>
          <LoginPantalla/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
