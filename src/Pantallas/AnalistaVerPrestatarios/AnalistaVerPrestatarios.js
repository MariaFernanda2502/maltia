import React, { useEffect, useState } from 'react';
import './AnalistaVerPrestatarios.css';
import BotonEditar from '../../Componentes/BotonEditar/BotonEditar';
import BotonEstatus from '../../Componentes/BotonEstatus/BotonEstatus';
import Buscador from '../../Componentes/Buscador/Buscador';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AsesorVerPrestatarios(props) {
    const [prospectos, setProspectos] = useState([]);
    useEffect(()=>{
        //get all users
        axios.get('http://localhost:5000/analista/lista-prestatarios')
        .then((result)=>{
            setProspectos(result.data.data)
            console.log(result.data.data)
        })
        .catch((error)=>{})
    },[])

    

    return (
        <div className="AesorVerProspectos">
            <header className="AsesorHeader">
                <Link to='/analista'><FlechaRegresar /></Link>
                <Buscador />
            </header>
            <body className="ContenidoParaAsesorVerProspectos">
                <div className="CuadroNombreProspectos">
                    <h3 className="nombrePrestatarioAnalista">Nombre del prestatario</h3>
                </div>
                <div className="DatosAsesorProspecto">
                    <table>
                        {prospectos.length > 0 && prospectos.map((prospecto)=>{
                            return(
                                <tr className="ElementosAsesorProspecto">
                                    <div className="InforamcionDeTablaAsesorProspecto">
                                        <td className="nombreDeProspecto" key={prospecto.prospectId}>{prospecto.nombre} {prospecto.apellidoPaterno}  {prospecto.apellidoMaterno}</td>
                                        <td className="BotonEditarParaAsesor">
                                            <nav>
                                            <Link to = {`ver-prestatarios/${prospecto.prospectId}`} ><BotonEditar /></Link>
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
            
        </div>
    );
}