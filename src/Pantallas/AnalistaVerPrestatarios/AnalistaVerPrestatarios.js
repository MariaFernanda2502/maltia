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
    const [search, setSearch] = useState('');
    useEffect(()=>{
        //get all users
        axios.get('http://localhost:5000/analista/lista-prestatarios')
        .then((result)=>{
            setProspectos(result.data.data)
            console.log(result.data.data)
        })
        .catch((error)=>{})
    },[])

    function handleSearch(event){
        event.preventDefault();
        fetchProspectos({
            query: search
        })
    }

    function fetchProspectos(params) {
        

        const queryParams = {
            ...params,
        }

        let queryString = Object.keys(queryParams).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key])
        }).join('&')

        axios({
            method: 'get',
            url: `http://localhost:5000/analista/lista-prestatarios?${queryString}`,
        })
            .then((result) => {
                setProspectos(result.data.data)
                
            })
            .catch((error) => {
                
        })
    }
    

    return (
        <div className="AesorVerProspectos">
            <header className="AdminVerAsesoresHeader">
                    <nav>
                        <Link to="/admin"><FlechaRegresar /></Link>
                    </nav>
                    <form onSubmit={handleSearch} className='Buscador_div'>
                        <input 
                            className='Buscador_div'
                            type="text"
                            placeholder="Introduce tu búsqueda"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button>Buscar</button>
                    </form>
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
                                        <td className="BotonEstatusparaAsesor">{ `${prospecto.estatus}` === "En proceso" ? <BotonEstatus estatus = "enEspera"/> : <BotonEstatus estatus = {prospecto.estatus}/>}</td>
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