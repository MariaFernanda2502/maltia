import React from 'react';
import './BotonEstatus.css';

function BotonEstatus({estatus="enEspera"}) {
  return (
    <div className="BotonEstatus">
        <button type="button" className="BotonEstatusBoton" id={estatus}></button>
    </div>
  );
}

export default BotonEstatus;
