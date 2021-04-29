import React from 'react';
import './BotonEstatus.css';

function BotonEstatus(props) {
  return (
    <div className="BotonEstatus">
        <button type="button" className="BotonEstatusBoton" id={props.estatus}></button>
    </div>
  );
}

export default BotonEstatus;
