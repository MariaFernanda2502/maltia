import REACT from 'react';
import CardPantallaPrincipal from '../../Componentes/CardPantallaPrincipal/CardPantallaPrincipal';
import BotonCerrarSesion from '../../Componentes/BotonCerrarSesion/BotonCerraSesion';
import './CardsSelectoras.css';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import { Link } from 'react-router-dom';

import reporteAprobacion from './imgs/reporteAprobacion.png';
import reporteRechazo from './imgs/reporteRechazo.png';

function AnalistaReportes() {

    return (
        <div className='PantallaCardsSelectoras_body'>
            <Link to='/analista' className='FlechaRegresar'><FlechaRegresar /></Link>
            <div className='PantallaCardsSelectoras_cards'>
            <Link to='/noImplementado' className='PantallaCardsSelectoras_link'><CardPantallaPrincipal imagenes={reporteAprobacion} mensaje='Aprobacion'/></Link>
            <Link to='/noImplementado' className='PantallaCardsSelectoras_link'><CardPantallaPrincipal imagenes={reporteRechazo} mensaje='Rechazo'/></Link>
            </div>
        </div>
    );
}

export default AnalistaReportes;