import React from 'react';
import './AnalistaVerPrestatarios.css';
import BotonEditar from '../../Componentes/BotonEditar/BotonEditar';
import BotonEstatus from '../../Componentes/BotonEstatus/BotonEstatus';
import Buscador from '../../Componentes/Buscador/Buscador';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';

export default function AnalistaVerPrestatarios(props) {
    return (
        <div className="GeneralVerPrestatarios">
            <header className="BuscadorAnalistas">
                <FlechaRegresar />
                <Buscador />
            </header>

            <body className="ContenidoTablaParaAnalistas">
                <div className="TituloPrestatarios">
                    <h3 className="NombreprestaAna">Nombre del prestatario</h3>
                </div>
                <div className="DatosPrestatarioAnalista">
                    <table>
                        <tr className="ElementosTablaPrestatarioAnalista">
                           <div className="ElementosDeTablaAnalistaprest">
                              <td className="nombrePrestatarioAnalista">Efren Aldana Escalona</td>
                              <td className="EditarDatosAnalista"><BotonEditar /></td>
                              <td className="EstatusPesonaAnalista"><BotonEstatus/></td>
                           </div>
                        </tr>
                        <tr className="ElementosTablaPrestatarioAnalista">
                           <div className="ElementosDeTablaAnalistaprest">
                              <td className="nombrePrestatarioAnalista">Efren Aldana Escalona</td>
                              <td className="EditarDatosAnalista"><BotonEditar /></td>
                              <td className="EstatusPesonaAnalista"><BotonEstatus estatus="aprobado"/></td>
                           </div>
                        </tr>
                        <tr className="ElementosTablaPrestatarioAnalista">
                           <div className="ElementosDeTablaAnalistaprest">
                              <td className="nombrePrestatarioAnalista">Efren Aldana Escalona</td>
                              <td className="EditarDatosAnalista"><BotonEditar /></td>
                              <td className="EstatusPesonaAnalista"><BotonEstatus/></td>
                           </div>
                        </tr>
                        <tr className="ElementosTablaPrestatarioAnalista">
                           <div className="ElementosDeTablaAnalistaprest">
                              <td className="nombrePrestatarioAnalista">Efren Aldana Escalona</td>
                              <td className="EditarDatosAnalista"><BotonEditar /></td>
                              <td className="EstatusPesonaAnalista"><BotonEstatus estatus="rechazado"/></td>
                           </div>
                        </tr>
                        <tr className="ElementosTablaPrestatarioAnalista">
                           <div className="ElementosDeTablaAnalistaprest">
                              <td className="nombrePrestatarioAnalista">Efren Aldana Escalona</td>
                              <td className="EditarDatosAnalista"><BotonEditar /></td>
                              <td className="EstatusPesonaAnalista"><BotonEstatus/></td>
                           </div>
                        </tr>
                    </table>
                </div>
            </body>
        </div>
    );
}