import REACT from 'react';
import './CardPantallaPrincipal.css';
import prestamos from './imgs/prestamos.jpeg';

function CardPantallaPrincipal() {
    return (
        <button className = 'Card'>
            <img className = 'Imagen' src = {prestamos} />
            <p className = 'Opcion'>Préstamos</p>
        </button>
    )
}

export default CardPantallaPrincipal;