import REACT from 'react';
import './Buscador.css';
import iconoBuscar from './iconoBuscar.png';
import iconoFiltrar from './iconoFiltrar.png';

function Buscador() {
    return (
        <div className='buscar'>
            <input type='search' placeholder='Buscar:'/>
            <div className='imagen'>
                <button> <img src={iconoBuscar} id='iconoBuscar'/> </button>
            </div>
            <div className='imagen2'>
                <button> <img src={iconoFiltrar} id='filtrar' /> </button>
            </div>
        </div>
    )
}

export default Buscador;