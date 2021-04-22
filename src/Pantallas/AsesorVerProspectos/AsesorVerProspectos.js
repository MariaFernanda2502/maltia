import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../../Componentes/BotonEditar/BotonEditar';
import './AsesorVerProspectos.css';
import BotonEditar from '../../Componentes/BotonEditar/BotonEditar';
import BotonEstatus from '../../Componentes/BotonEstatus/BotonEstatus';
import Buscador from '../../Componentes/Buscador/Buscador';
import BotonNuevoProspecto from '../../Componentes/BotonNuevoProspecto/BotonNuevoProspecto';
import {Link} from 'react-router-dom';
import BotonCerrarSesion from '../../Componentes/BotonCerrarSesion/BotonCerraSesion';

export default function AsesorVerProspectos(props) {
    const [prospectos, setProspectos] = useState([]);
    const [prestatarios, setPrestatarios] = useState([]);
    useEffect(()=>{
        //get all users
        axios.get('http://localhost:5000/asesor/lista-prospectos')
        .then((result)=>{
            setProspectos(result.data.data)
        })
        .catch((error)=>{})
    },[])

    useEffect(()=>{
        axios.get('')
    })

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
                        {prospectos.length > 0 && prospectos.map((prospecto)=>{
                            return(
                                <tr className="ElementosAsesorProspecto">
                                    <div className="InforamcionDeTablaAsesorProspecto">
                                        <td className="nombreDeProspecto" key={prospecto.prospectId}>{prospecto.nombre} {prospecto.apellidoPaterno} {prospecto.apellidoMaterno}</td>
                                        <td className="BotonEditarParaAsesor">
                                            <nav>
                                                <Link to = "/asesor/editar-prospecto"><BotonEditar /></Link>
                                            </nav>
                                        </td>
                                        <td className="BotonEstatusparaAsesor"><BotonEstatus /></td>
                                    </div>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </body>
            <footer className="FooterAsesorVerProspecto">
                <nav>
                    <Link to = "/asesor/nuevo-prospecto"><BotonNuevoProspecto /></Link>
                </nav>
                <Link to="/"><BotonCerrarSesion/></Link>
            </footer>
        </div>
    );
}