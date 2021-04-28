import React from 'react';
import ProspectoPantalla from './prospectoPantalla';
import {Link} from 'react-router-dom';
import FlechaRegresar from '../../Componentes/FlechaRegresar';

function PantallaExtraProspecto(props){

    const prospecto ={
        prospectId: '',
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        telefono: ''
    };
    return(
        <div id="contenido">
            <div className="botonFlecha">
                <nav>
                    <Link to="/asesor"><FlechaRegresar /></Link>
                </nav>
            </div>
            <h1>Nuevo Prospecto</h1>
            <ProspectoPantalla prospecto={prospecto} />
        </div>
    )
}


export default PantallaExtraProspecto;