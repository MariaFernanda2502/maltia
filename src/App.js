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
import AdminNuevoAsesor from './Pantallas/AdminNuevoAsesor/AdminNuevoAsesor';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/admin/nuevo-asesor' exact>
          <AdminNuevoAsesor />
        </Route>
        <Route path='/' exact>
          <LoginPantalla/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
