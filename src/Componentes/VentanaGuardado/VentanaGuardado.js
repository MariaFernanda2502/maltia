import React from 'react';
import palomita from './palomita.png';
import cerrar from './simbolocerrar.png';
import './VentanaGuardado.css';

function VentanaGuardado() {
  return (
    <div className="VentanaGuardado">
        <img src= {cerrar} id="cierra"/>
        <img src = {palomita} id="paloma"/>
        <p>Guardado con éxito</p>
    </div>
  );
}

export default VentanaGuardado;
