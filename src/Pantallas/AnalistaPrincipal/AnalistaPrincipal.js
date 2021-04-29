import REACT from 'react';
import CardPantallaPrincipal from '../../Componentes/CardPantallaPrincipal/CardPantallaPrincipal';
import BotonCerrarSesion from '../../Componentes/BotonCerrarSesion/BotonCerraSesion';
import './CardsSelectoras.css';
import { Link } from 'react-router-dom';

import prestamos from './imgs/prestamos.jpg';
import reportess from './imgs/reportess.jpg';

function AnalistaPrincipal() {

    return (
        <div className='PantallaCardsSelectoras_body'>
            <div className='PantallaCardsSelectoras_cards'>
            <Link 
                to='/analista/ver-prestatarios' 
                className='Analistaprincipal_link'>
                    <CardPantallaPrincipal 
                        imagenes={prestamos} 
                        mensaje='Préstamos'/>
            </Link>
            <Link 
                to='/analista/reportes' 
                className='Analistaprincipal_link'>
                    <CardPantallaPrincipal 
                        imagenes={reportess} 
                        mensaje='Reportes'/>
            </Link>
            <Link 
                to='/' 
                className='AnalistaPrincipal_link'>
                    <BotonCerrarSesion />
            </Link>
            </div>
        </div>
    );
}

export default AnalistaPrincipal;