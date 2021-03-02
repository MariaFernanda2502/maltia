import React from 'react';
import palomita from './palomita.png';
import cerrar from './simbolocerrar.png'
function VentanaGuardado() {
  return (
    <div className="VentanaGuardado">
        <img src= {cerrar} />
        <img src = {palomita} />
    </div>
  );
}

export default VentanaGuardado;
