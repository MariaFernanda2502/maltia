import REACT from 'react';
import './CardPantallaPrincipal.css';
import prestamos from './imgs/prestamos.jpeg';

function CardPantallaPrincipal() {
    return (
        <div className = 'Card'>
            <img className = 'Imagen' src = {prestamos} />
            <p className = 'Opcion'>Préstamos</p>
        </div>
    )
}

export default CardPantallaPrincipal;