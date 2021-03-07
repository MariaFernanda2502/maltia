import REACT from 'react';
import iconoFlecha from './iconoFlecha.png';
import './FlechaRegresar.css';

function FlechaRegresar() {
    return (
        <div className='botonflecha' >
            <button> <img src = {iconoFlecha} id='flecha'/> </button>
        </div>
    );
}

export default FlechaRegresar;