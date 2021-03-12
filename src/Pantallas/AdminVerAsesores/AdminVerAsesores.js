import React from 'react';
import './AdminVerAsesores.css';
import Buscador from '../../Componentes/Buscador/Buscador';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import BotonEditar from '../../Componentes/BotonEditar/BotonEditar';
import BotonDesactivar from '../../Componentes/BotonDesactivar';
import BotonNuevoAsesor from '../../Componentes/BotonNuevoAsesor';
import { Link } from 'react-router-dom';

export default function AdminVerAsesores(props) {
    return (
        <div className="AdminVerAsesores">
            <header className="AdminVerAsesoresHeader">
                <nav>
                    <Link to="/admin"><FlechaRegresar /></Link>
                </nav>
                <Buscador />
            </header>
            <body className="ContenidoParaAdminVerAsesores">
                <div className="CuadroNombreAsesor">
                    <h3 className="NombreAsesorTitulo">Nombre del asesor</h3>
                </div>
                <div className="DatosDeAdminVerAsesores">
                    <table>
                        <tr className="ElementosTablaAdminVerAsesores">
                            <div className="InforamcionDeTablaAdminAsesor">
                                <td className="nombreDeAsesor">Efren Aldana Escalona  </td>
                                <td> 
                                    <nav>
                                        <Link to="/admin/editar-asesor" className="BotonEditarParaAsesor"> <BotonEditar /> </Link>
                                    </nav>
                                </td>
                                <td className="BotonDesactivarParaAsesor"><BotonDesactivar/></td>
                            </div>
                         </tr>
                         <tr className="ElementosTablaAdminVerAsesores">
                            <div className="InforamcionDeTablaAdminAsesor">
                                <td className="nombreDeAsesor">Efren Aldana Escalona  </td>
                                <td> 
                                    <nav>
                                        <Link to="/admin/editar-asesor" className="BotonEditarParaAsesor"> <BotonEditar /> </Link>
                                    </nav>
                                </td>
                                <td className="BotonDesactivarParaAsesor"><BotonDesactivar/></td>
                            </div>
                         </tr>
                         <tr className="ElementosTablaAdminVerAsesores">
                            <div className="InforamcionDeTablaAdminAsesor">
                                <td className="nombreDeAsesor">Efren Aldana Escalona  </td>
                                <td> 
                                    <nav>
                                        <Link to="/admin/editar-asesor" className="BotonEditarParaAsesor"> <BotonEditar /> </Link>
                                    </nav>
                                </td>
                                <td className="BotonDesactivarParaAsesor"><BotonDesactivar/></td>
                            </div>
                         </tr>
                         <tr className="ElementosTablaAdminVerAsesores">
                            <div className="InforamcionDeTablaAdminAsesor">
                                <td className="nombreDeAsesor">Efren Aldana Escalona  </td>
                                <td> 
                                    <nav>
                                        <Link to="/admin/editar-asesor" className="BotonEditarParaAsesor"> <BotonEditar /> </Link>
                                    </nav>
                                </td>
                                <td className="BotonDesactivarParaAsesor"><BotonDesactivar/></td>
                            </div>
                         </tr>
                         <tr className="ElementosTablaAdminVerAsesores">
                            <div className="InforamcionDeTablaAdminAsesor">
                                <td className="nombreDeAsesor">Efren Aldana Escalona  </td>
                                <td> 
                                    <nav>
                                        <Link to="/admin/editar-asesor" className="BotonEditarParaAsesor"> <BotonEditar /> </Link>
                                    </nav>
                                </td>
                                <td className="BotonDesactivarParaAsesor"><BotonDesactivar/></td>
                            </div>
                         </tr>
                         <tr className="ElementosTablaAdminVerAsesores">
                            <div className="InforamcionDeTablaAdminAsesor">
                                <td className="nombreDeAsesor">Efren Aldana Escalona  </td>
                                <td> 
                                    <nav>
                                        <Link to="/admin/editar-asesor" className="BotonEditarParaAsesor"> <BotonEditar /> </Link>
                                    </nav>
                                </td>
                                <td className="BotonDesactivarParaAsesor"><BotonDesactivar/></td>
                            </div>
                         </tr>
                         <tr className="ElementosTablaAdminVerAsesores">
                            <div className="InforamcionDeTablaAdminAsesor">
                                <td className="nombreDeAsesor">Efren Aldana Escalona  </td>
                                <td> 
                                    <nav>
                                        <Link to="/admin/editar-asesor" className="BotonEditarParaAsesor"> <BotonEditar /> </Link>
                                    </nav>
                                </td>
                                <td className="BotonDesactivarParaAsesor"><BotonDesactivar/></td>
                            </div>
                         </tr>
                    </table>
                </div>
            </body>
            <footer className="FooterAdminVerAsesor">
                <nav>
                    <Link to="/admin/nuevo-asesor"><BotonNuevoAsesor /></Link>
                </nav>
            </footer>
        </div>
    );
}