import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import LoginPantalla from './Pantallas/LoginPantalla/LoginPantalla';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <LoginPantalla/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
