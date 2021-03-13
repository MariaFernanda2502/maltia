import React from 'react';
import './AdminVerAnalistas.css';
import BotonEditar from '../../Componentes/BotonEditar/BotonEditar';
import Buscador from '../../Componentes/Buscador/Buscador';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import BotonDesactivar from '../../Componentes/BotonDesactivar';
import BotonNuevoAnalista from '../../Componentes/BotonNuevoAnalista/BotonNuevoAnalista';
import { Link } from 'react-router-dom';

export default function AdminVerAnalistas(props) {
    return (
        <div className="AdminVerAnalistas">
            <header className="AdminVerAnalistasHeader">
                <nav>
                    <Link to = "/admin"><FlechaRegresar /></Link>
                </nav>
                <Buscador />
            </header>
            <body className="ContenidoParaAdminVerAnalistas">
                <div className="CuadroNombreAnalista">
                    <h3 className="NombreAnalistaTitulo">Nombre del analista</h3>
                </div>
                <div className="DatosDeAdminVerAnalista">
                    <table>
                        <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista">
                                    <nav>
                                        <Link to = "/admin/editar-analista"><BotonEditar /></Link>
                                    </nav>
                                </td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista">
                                    <nav>
                                        <Link to = "/admin/editar-analista"><BotonEditar /></Link>
                                    </nav>
                                </td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista">
                                    <nav>
                                        <Link to = "/admin/editar-analista"><BotonEditar /></Link>
                                    </nav>
                                </td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista">
                                    <nav>
                                        <Link to = "/admin/editar-analista"><BotonEditar /></Link>
                                    </nav>
                                </td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista">
                                    <nav>
                                        <Link to = "/admin/editar-analista"><BotonEditar /></Link>
                                    </nav>
                                </td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista">
                                    <nav>
                                        <Link to = "/admin/editar-analista"><BotonEditar /></Link>
                                    </nav>
                                </td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista">
                                    <nav>
                                        <Link to = "/admin/editar-analista"><BotonEditar /></Link>
                                    </nav>
                                </td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr>  
                    </table>
                </div>
            </body>
            <footer className="FooterAdminVerAnalista">
                <nav>
                    <Link to = "/admin/nuevo-analista"><BotonNuevoAnalista /></Link>
                </nav>
            </footer>
        </div>
    );
}