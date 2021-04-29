import logo from './logo.svg';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
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
import AdminVerAnalistas from './Pantallas/AdminVerAnalistas/AdminVerAnalistas';
import AdminVerAsesores from './Pantallas/AdminVerAsesores/AdminVerAsesores';
import AsesorVerProspectos from './Pantallas/AsesorVerProspectos/AsesorVerProspectos';
import AnalistaVerPrestatarios from './Pantallas/AnalistaVerPrestatarios/AnalistaVerPrestatarios';
import EditarPrestatario2 from './Pantallas/editarPrestatario2/editarPrestatario2';
import ProspectoPantalla from './Pantallas/prospectoPantalla/prospectoPantalla';
import EditarPrestatario from './Pantallas/editarPrestatario/editarPrestatario';

import PantallaExtraProspecto from './Pantallas/prospectoPantalla/PantallaExtraProspecto';
import PantallaNuevoProspecto from './Pantallas/prospectoPantalla/PantallaNuevoProspecto';

import PeticionUnAnalista from './Componentes/PeticionUnAnalista';
import NuevoAnalista from './Componentes/NuevoAnalista';
import NuevoAsesor from './Componentes/NuevoAsesor';
import PeticionUnAsesor from './Componentes/PeticionUnAsesor';
import { useAuth } from './auth-context';
import Login from '../src/Componentes/Login/Login';
import PantallaPerfiles from './Pantallas/PantallaPerfiles/PantallaPerfiles';


function App() {
  const { employee, login } = useAuth();

  return (
    <React.Fragment >
    { employee ? (
    <Router>
      <Switch>

        <Route 
          path= "/asesor/editar-prospecto/:id"
          render={(props)=> <PantallaExtraProspecto {...props}/>} 
          exact 
        />

        <Route 
          path='/asesor/editar-prestatario/:id' 
          render = {(props) => <EditarPrestatario {...props}/> }
          exact
        />
        <Route path= '/asesor/nuevo-prospecto' exact>
          <PantallaNuevoProspecto/>
        </Route>
        <Route path='/asesor' exact>
          <AsesorVerProspectos />
        </Route>
        <Route path='/analista' exact>
          <AnalistaPrincipal />
        </Route>
        <Route path='/analista/ver-prestatarios' exact>
          <AnalistaVerPrestatarios />
        </Route>
        <Route 
            path='/analista/ver-prestatarios/:prospectId'
            render={(props) => <EditarPrestatario2 {...props}/>}
            exact 
          />
        <Route path='/analista/reportes' exact>
          <AnalistaReportes />
        </Route>

            <Route path='/admin/asesores/nuevo' exact>
              <NuevoAsesor />
            </Route>
            <Route path='/admin/analistas/nuevo' exact>
              <NuevoAnalista />
            </Route>
            <Route 
              path='/admin/asesores/:userId'
              render={(props) => <PeticionUnAsesor {...props}/>} 
              exact
            />
            <Route 
              path='/admin/analistas/:userId'
              render={(props) => <PeticionUnAnalista {...props}/>} 
              exact
            />
            <Route path = '/admin/asesores' exact>
              <AdminVerAsesores />
            </Route>
            <Route path = '/admin/analistas' exact>
              <AdminVerAnalistas />
            </Route>
            <Route path='/admin' exact>
              <AdminPrincipal />
            </Route>
            <Route path='/' exact>
              <PantallaPerfiles/>
            </Route>
          </Switch>
        </Router>
      ) : (
        <Login />
      ) }
    </React.Fragment>
  );
}

export default App;
