import React from 'react';
import './BotonCerrarSesion.css';
import { useAuth } from '../../auth-context';

function BotonCerrarSesion() {
  const { logout } = useAuth();
  
  return (
    <div className="BotonCerrarSesion">
        <button onClick={logout} type="button" className="BotonCerrarSesionBoton">Cerrar Sesión</button>
    </div>
  );
}

export default BotonCerrarSesion;