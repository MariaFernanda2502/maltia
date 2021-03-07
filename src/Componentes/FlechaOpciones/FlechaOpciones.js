import REACT from 'react';
import './index.js';
import iconoOpciones from './iconoOpciones.png';
import './FlechaOpciones.css';

function FlechaOpciones() {
    return (
        <div className='opciones'>
            <button> <img src={iconoOpciones} id='desplegar'/></button>
        </div>
    );
}

export default FlechaOpciones;