import CardPantallaPrincipal from '../../Componentes/CardPantallaPrincipal/CardPantallaPrincipal';
import BotonCerrarSesion from '../../Componentes/BotonCerrarSesion/BotonCerraSesion';
import './CardsSelectoras.css';
import analista from './imgs/analista.jpg';
import asesor from './imgs/asesor.jpg';
import { Link } from 'react-router-dom';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';

function AdminPrincipal() {

    return (
        <div className='PantallaCardsSelectoras_body'>
            <div className='PantallaCardsSelectoras_cards'>
                <nav>
                    <div  className='contenedorCards'>
                        <div>
                            <Link to='/admin/analistas' className="Adminprincipal_link">
                                <CardPantallaPrincipal 
                                    imagenes={analista} 
                                    mensaje='Analistas'
                                />
                            </Link>
                        </div>
                        <div>
                            <Link to='/admin/asesores' className="Adminprincipal_link">
                                <CardPantallaPrincipal 
                                    imagenes={asesor} 
                                    mensaje='Asesores'
                                />
                            </Link>
                    </div>
                        </div>
                            <Link to='/' className="Adminprincipal_link">
                                <BotonCerrarSesion />
                            </Link>
                </nav>
            </div>
        </div>
    );
}

export default AdminPrincipal;