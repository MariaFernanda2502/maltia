import REACT from 'react';
import CardPantallaPrincipal from '../../Componentes/CardPantallaPrincipal/CardPantallaPrincipal';
import BotonCerrarSesion from '../../Componentes/BotonCerrarSesion/BotonCerraSesion';
import './CardsSelectoras.css';

import analistas from './imgs/analistas.png';
import asesores from './imgs/asesores.png';
import { defaultProps } from 'react-select/src/Select';
import AdminVerAsesores from '../AdminVerAsesores/AdminVerAsesores';

function AdminPrincipal() {

    return (
        <div className='PantallaCardsSelectoras_body'>
            <div className='PantallaCardsSelectoras_cards'>
            <CardPantallaPrincipal imagenes={analistas} mensaje='Analistas'/>
            <CardPantallaPrincipal imagenes={asesores} mensaje='Asesores'/>
            <BotonCerrarSesion />
            </div>
        </div>
    );
}

export default AdminPrincipal;