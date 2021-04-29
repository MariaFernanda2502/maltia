import React from 'react';
import './BotonGuardar.css';

function BotonGuardar(props) {
  return (
    <div className="BotonGuardar">
<<<<<<< HEAD
        <button type="button" className="BotonGuardar" >Guardar</button>
=======

        <button 
          type={props.type} 
          className={props.className} 
          disabled={props.disabled} 
          onClick = {props.onClick}
          >
            Guardar
            </button>

        
>>>>>>> 64ee3a9b1266553a752693a77924517933c06f4f
    </div>
  );
}

export default BotonGuardar;