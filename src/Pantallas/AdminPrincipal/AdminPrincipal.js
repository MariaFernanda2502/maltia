import REACT from 'react';
import CardPantallaPrincipal from '../../Componentes/CardPantallaPrincipal/CardPantallaPrincipal';
import BotonCerrarSesion from '../../Componentes/BotonCerrarSesion/BotonCerraSesion';
import './CardsSelectoras.css';
import analistas from './imgs/analistas.png';
import asesores from './imgs/asesores.png';
import { Link } from 'react-router-dom';

function AdminPrincipal() {

    return (
        <div className='PantallaCardsSelectoras_body'>
            <div className='PantallaCardsSelectoras_cards'>
                <nav>
                    <Link to='/admin/analistas' className="Adminprincipal_link">
                        <CardPantallaPrincipal 
                            imagenes={analistas} 
                            mensaje='Analistas'
                        />
                    </Link>
                    <Link to='/admin/asesores' className="Adminprincipal_link">
                        <CardPantallaPrincipal 
                            imagenes={asesores} 
                            mensaje='Asesores'
                        />
                    </Link>
                    <Link to='/' className="Adminprincipal_link">
                        <BotonCerrarSesion />
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default AdminPrincipal;