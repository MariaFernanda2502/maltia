import REACT from 'react';
import './CardPantallaPrincipal.css';

function CardPantallaPrincipal({imagenes, mensaje}) {
    return (
        <button className = 'Card'>
            <img className = 'Imagen' src = {imagenes} />
            <p className = 'Opcion'>{`${mensaje}`}</p>
        </button>
    )
}

export default CardPantallaPrincipal;