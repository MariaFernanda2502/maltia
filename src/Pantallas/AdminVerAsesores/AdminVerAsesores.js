import React from 'react';
import './AdminVerAsesores.css';
import BotonEditar from '../../Componentes/BotonEditar/BotonEditar';
import Buscador from '../../Componentes/Buscador/Buscador';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import BotonDesactivar from '../../Componentes/BotonDesactivar';
import BotonNuevoAsesor from '../../Componentes/BotonNuevoAsesor';

export default function AdminVerAsesores(props) {
    return (
        <div className="AdminVerAsesores">
            <header className="AdminVerAsesoresHeader">
                <FlechaRegresar />
                <Buscador />
            </header>

            <body className="ContenidoParaAdminVerAsesores">
                <div>
                    <h3 className="NombreAsesorTitulo">Nombre del asesor</h3>
                    <p className="LineaSeparadoraAdminAsesores">______________________________________________________</p>
                </div>
                <div className="DatosDeAdminVerAsesores">
                    <table>
                        <tr className="ElementosTablaAdminVerAsesores">
                             <td className="nombreDeAsesor">Efren Aldana Escalona</td>
                            <td className="BotonEditarParaAsesor"><BotonEditar /></td>
                            <td className="BotonEstatusParaAsesor"><BotonDesactivar/></td>
                         </tr>
                         <tr className="ElementosTablaAdminVerAsesores">
                             <td className="nombreDeAsesor">Efren Aldana Escalona</td>
                            <td className="BotonEditarParaAsesor"><BotonEditar /></td>
                            <td className="BotonEstatusParaAsesor"><BotonDesactivar/></td>
                         </tr>
                         <tr className="ElementosTablaAdminVerAsesores">
                             <td className="nombreDeAsesor">Efren Aldana Escalona</td>
                            <td className="BotonEditarParaAsesor"><BotonEditar /></td>
                            <td className="BotonEstatusParaAsesor"><BotonDesactivar/></td>
                         </tr>
                         <tr className="ElementosTablaAdminVerAsesores">
                             <td className="nombreDeAsesor">Efren Aldana Escalona</td>
                            <td className="BotonEditarParaAsesor"><BotonEditar /></td>
                            <td className="BotonEstatusParaAsesor"><BotonDesactivar/></td>
                         </tr>
                    </table>
                </div>
            </body>
            <footer className="FooterAdminVerAsesor">
                <BotonNuevoAsesor />
            </footer>
        </div>
    );
}