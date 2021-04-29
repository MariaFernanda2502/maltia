import React from 'react';
import './BotonGuardar.css';

function handleSave() {
  console.log("1")
}
function BotonGuardar() {
  return (
    <div className="BotonGuardar">
        <button type="button" className="BotonGuardar" >Guardar</button>
    </div>
  );
}

export default BotonGuardar;