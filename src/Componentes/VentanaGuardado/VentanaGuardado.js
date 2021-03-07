import React from 'react';
import palomita from './palomita.png';
import cerrar from './simbolocerrar.png';
import './VentanaGuardado.css';

function VentanaGuardado() {
  return (
    <div className="VentanaGuardado">
        <button id="Botoncierra"><img src= {cerrar} id="cierra"/></button>
        <img src = {palomita} id="paloma"/>
        <p id="Guardadoconexito">Guardado con éxito</p>
    </div>
  );
}

export default VentanaGuardado;
