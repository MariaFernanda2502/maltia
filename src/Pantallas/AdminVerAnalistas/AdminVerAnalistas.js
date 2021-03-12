import React from 'react';
import './AdminVerAnalistas.css';
import BotonEditar from '../../Componentes/BotonEditar/BotonEditar';
import Buscador from '../../Componentes/Buscador/Buscador';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import BotonDesactivar from '../../Componentes/BotonDesactivar';
import BotonNuevoAnalista from '../../Componentes/BotonNuevoAnalista/BotonNuevoAnalista';

export default function AdminVerAnalistas(props) {
    return (
        <div className="AdminVerAnalistas">
            <header className="AdminVerAnalistasHeader">
                <FlechaRegresar />
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
                                <td className="BotonEditarParaAnalista"><BotonEditar /></td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr>
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista"><BotonEditar /></td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista"><BotonEditar /></td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista"><BotonEditar /></td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista"><BotonEditar /></td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista"><BotonEditar /></td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista"><BotonEditar /></td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista"><BotonEditar /></td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista"><BotonEditar /></td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista"><BotonEditar /></td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista"><BotonEditar /></td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr> 
                         <tr className="ElementosTablaAdminVerAnalista">
                            <div className="InforamcionDeTablaAdminAnalista">
                                <td className="nombreDeAnalista">Efren Aldana Escalona  </td>
                                <td className="BotonEditarParaAnalista"><BotonEditar /></td>
                                <td className="BotonDesactivarParaAnalista"><BotonDesactivar/></td>
                            </div>
                         </tr>  
                    </table>
                </div>
            </body>
            <footer className="FooterAdminVerAnalista">
                <BotonNuevoAnalista />
            </footer>
        </div>
    );
}