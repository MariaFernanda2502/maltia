import React from 'react';
import './BotonGuardar.css';

function BotonGuardar(props) {
  return (
    <div className="BotonGuardar">

        <button 
          type={props.type} 
          className={props.className} 
          disabled={props.disabled} 
          onClick = {props.onClick}
          >
            Guardar
            </button>

        
    </div>
  );
}

export default BotonGuardar;