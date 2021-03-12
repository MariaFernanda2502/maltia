import React from 'react';
import './AsesorVerProspectos.css';
import '../../Componentes/BotonEditar/BotonEditar';
import BotonEditar from '../../Componentes/BotonEditar/BotonEditar';
import BotonEstatus from '../../Componentes/BotonEstatus/BotonEstatus';
import Buscador from '../../Componentes/Buscador/Buscador';
import Cerrarsesion from '../../Componentes/BotonCerrarSesion/BotonCerraSesion';
import BotonNuevoProspecto from '../../Componentes/BotonNuevoProspecto/BotonNuevoProspecto';

function AsesorVerProspectos(props) {
    return (
        <div className="PrincipalAsesores">
            <header className="BuscadorParaAsesores">
                <Buscador />
            </header>

            <body className="TablaParaAsesores">
                <div>
                    <h3 className="Nombreprosp">Nombre del prospecto</h3>
                    <p className="LineaSeparadora">______________________________________________________</p>
                </div>
                <div className="DatosProspectosAsesor">
                    <table>
                            {
                                props.users.map((user,index) =>(
                                    <tr className="ElementosTablaProspectosAsesor" key={user.name}>
                                        <td className="nombreProspectoOPrestatario">{user.name}</td>
                                        <td className="EditarDatos"><BotonEditar /></td>
                                        <td className="EstatusPesona"><BotonEstatus/></td>
                                    </tr>
                                ))
                            }
                    </table>
                </div>
            </body>

            <footer className="FooterAsesores">
                <BotonNuevoProspecto />
                <p><Cerrarsesion /></p>
            </footer>
        </div>
    );
}
/*function Usuario(){
    return(
        <div>
            <UserList
            users={[{name: "Efren"},{name: "Efren"}, {name: "Efren"},{name: "Efren"},{name: "Efren"},{name: "Efren"},]}
        />
        </div>
    );
}*/
export default AsesorVerProspectos;