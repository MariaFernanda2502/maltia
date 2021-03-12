import REACT from 'react';
import CardPantallaPrincipal from '../../Componentes/CardPantallaPrincipal/CardPantallaPrincipal';
import BotonCerrarSesion from '../../Componentes/BotonCerrarSesion/BotonCerraSesion';
import './CardsSelectoras.css';

import reporteAprobacion from './imgs/reporteAprobacion.png';
import reporteRechazo from './imgs/reporteRechazo.png';

function AnalistaReportes() {

    return (
        <div className='PantallaCardsSelectoras_body'>
            <div className='PantallaCardsSelectoras_cards'>
            <CardPantallaPrincipal imagenes={reporteAprobacion} mensaje='Aprobacion'/>
            <CardPantallaPrincipal imagenes={reporteRechazo} mensaje='Rechazo'/>
            <BotonCerrarSesion />
            </div>
        </div>
    );
}

export default AnalistaReportes;