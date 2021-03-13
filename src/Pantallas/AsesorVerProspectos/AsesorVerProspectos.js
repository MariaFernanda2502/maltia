import React from 'react';
import '../../Componentes/BotonEditar/BotonEditar';
import './AsesorVerProspectos.css';
import BotonEditar from '../../Componentes/BotonEditar/BotonEditar';
import BotonEstatus from '../../Componentes/BotonEstatus/BotonEstatus';
import Buscador from '../../Componentes/Buscador/Buscador';
import BotonNuevoProspecto from '../../Componentes/BotonNuevoProspecto/BotonNuevoProspecto';
import {Link} from 'react-router-dom';
import BotonCerrarSesion from '../../Componentes/BotonCerrarSesion/BotonCerraSesion';

export default function AsesorVerProspectos(props) {
    return (
        <div className="AesorVerProspectos">
            <header className="AsesorHeader">
                <Buscador />
            </header>
            <body className="ContenidoParaAsesorVerProspectos">
                <div className="CuadroNombreProspectos">
                    <h3 className="NombreProspectoTitulo">Nombre del propsecto</h3>
                </div>
                <div className="DatosAsesorProspecto">
                    <table>
                        <tr className="ElementosAsesorProspecto">
                            <div className="InforamcionDeTablaAsesorProspecto">
                                <td className="nombreDeProspecto">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAsesor">
                                    <nav>
                                        <Link to = "/admin/editar-analista"><BotonEditar /></Link>
                                    </nav>
                                </td>
                                <td className="BotonEstatusparaAsesor"><BotonEstatus/></td>
                            </div>
                         </tr>
                         <tr className="ElementosAsesorProspecto">
                            <div className="InforamcionDeTablaAsesorProspecto">
                                <td className="nombreDeProspecto">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAsesor">
                                    <nav>
                                        <Link to = "/admin/editar-analista"><BotonEditar /></Link>
                                    </nav>
                                </td>
                                <td className="BotonEstatusparaAsesor"><BotonEstatus/></td>
                            </div>
                         </tr>
                         <tr className="ElementosAsesorProspecto">
                            <div className="InforamcionDeTablaAsesorProspecto">
                                <td className="nombreDeProspecto">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAsesor">
                                    <nav>
                                        <Link to = "/admin/editar-analista"><BotonEditar /></Link>
                                    </nav>
                                </td>
                                <td className="BotonEstatusparaAsesor"><BotonEstatus/></td>
                            </div>
                         </tr>
                         <tr className="ElementosAsesorProspecto">
                            <div className="InforamcionDeTablaAsesorProspecto">
                                <td className="nombreDeProspecto">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAsesor">
                                    <nav>
                                        <Link to = "/admin/editar-analista"><BotonEditar /></Link>
                                    </nav>
                                </td>
                                <td className="BotonEstatusparaAsesor"><BotonEstatus/></td>
                            </div>
                         </tr>
                         <tr className="ElementosAsesorProspecto">
                            <div className="InforamcionDeTablaAsesorProspecto">
                                <td className="nombreDeProspecto">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAsesor">
                                    <nav>
                                        <Link to = "/admin/editar-analista"><BotonEditar /></Link>
                                    </nav>
                                </td>
                                <td className="BotonEstatusparaAsesor"><BotonEstatus/></td>
                            </div>
                         </tr>
                         <tr className="ElementosAsesorProspecto">
                            <div className="InforamcionDeTablaAsesorProspecto">
                                <td className="nombreDeProspecto">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAsesor">
                                    <nav>
                                        <Link to = "/admin/editar-analista"><BotonEditar /></Link>
                                    </nav>
                                </td>
                                <td className="BotonEstatusparaAsesor"><BotonEstatus/></td>
                            </div>
                         </tr>
                         <tr className="ElementosAsesorProspecto">
                            <div className="InforamcionDeTablaAsesorProspecto">
                                <td className="nombreDeProspecto">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAsesor">
                                    <nav>
                                        <Link to = "/admin/editar-analista"><BotonEditar /></Link>
                                    </nav>
                                </td>
                                <td className="BotonEstatusparaAsesor"><BotonEstatus/></td>
                            </div>
                         </tr>
                         <tr className="ElementosAsesorProspecto">
                            <div className="InforamcionDeTablaAsesorProspecto">
                                <td className="nombreDeProspecto">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAsesor">
                                    <nav>
                                        <Link to = "/admin/editar-analista"><BotonEditar /></Link>
                                    </nav>
                                </td>
                                <td className="BotonEstatusparaAsesor"><BotonEstatus/></td>
                            </div>
                         </tr>
                    </table>
                </div>
            </body>
            <footer className="FooterAsesorVerProspecto">
                <nav>
                    <Link to = "/admin/nuevo-analista"><BotonNuevoProspecto /></Link>
                </nav>
                <Link to="/"><BotonCerrarSesion/></Link>
            </footer>
        </div>
    );
}