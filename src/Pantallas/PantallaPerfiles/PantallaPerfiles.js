import REACT from 'react';
import CardPantallaPrincipal from '../../Componentes/CardPantallaPrincipal/CardPantallaPrincipal';
import BotonCerrarSesion from '../../Componentes/BotonCerrarSesion/BotonCerraSesion';
import { Link } from 'react-router-dom';

import analista from './analista.jpg';
import asesor from './asesor.jpg';
import administrador from './administrador.jpg';

function AdminPrincipal() {

    return (
        <div className='PantallaCardsSelectoras_body'>
            <div className='PantallaCardsSelectoras_cards'>
                <nav>
                    <Link to='/analista' className="Adminprincipal_link">
                        <CardPantallaPrincipal 
                            imagenes={analista} 
                            mensaje='Analista'
                        />
                    </Link>
                    <Link to='/asesor' className="Adminprincipal_link">
                        <CardPantallaPrincipal 
                            imagenes={asesor} 
                            mensaje='Asesor'
                        />
                    </Link>
                    <Link to='/admin' className="Adminprincipal_link">
                        <CardPantallaPrincipal 
                            imagenes={administrador} 
                            mensaje='Administrador'
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