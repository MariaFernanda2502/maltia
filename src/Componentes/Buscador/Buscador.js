import REACT from 'react';
import './Buscador.css';
import iconoBuscar from './iconoBuscar.png';
import iconoFiltrar from './iconoFiltrar.png';

function Buscador() {
    return (
        <div className='Buscador_div'>
            <input type='search' placeholder='Buscar:'/>
            <div className='Buscador_imagen'>
                <button> <img src={iconoBuscar} id='iconoBuscar'/> </button>
            </div>
            <div className='Buscador_imagen2'>
                <button> <img src={iconoFiltrar} id='iconoFiltrar' /> </button>
            </div>
        </div>
    )
}

export default Buscador;