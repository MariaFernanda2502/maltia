import REACT from 'react';
import CardPantallaPrincipal from '../../Componentes/CardPantallaPrincipal/CardPantallaPrincipal';
import BotonCerrarSesion from '../../Componentes/BotonCerrarSesion/BotonCerraSesion';
import './CardsSelectoras.css';

import prestamos from './imgs/prestamos.png';
import reportes from './imgs/reportes.png';

function AnalistaPrincipal() {

    return (
        <div className='PantallaCardsSelectoras_body'>
            <div className='PantallaCardsSelectoras_cards'>
            <CardPantallaPrincipal imagenes={prestamos} mensaje='Préstamos'/>
            <CardPantallaPrincipal imagenes={reportes} mensaje='Reportes'/>
            <BotonCerrarSesion />
            </div>
        </div>
    );
}

export default AnalistaPrincipal;