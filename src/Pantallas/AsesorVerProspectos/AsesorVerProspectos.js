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
    const [prestatariosSolicitud, setPrestatariosSolicitud] = useState([]);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        setStatus('loading')
        setError(null)
        axios.get('http://localhost:5000/asesor/lista-prospectos')
        .then((result)=>{
            setProspectos(result.data.data)
            setStatus('resolved')
        })
        .catch((error)=>{
            setError(error)
            setStatus('error')
        })
    },[])

    useEffect(()=>{
        setStatus('loading')
        setError(null)
        axios.get('http://localhost:5000/asesor/lista-prestatarios')
        .then((result)=>{
            setPrestatarios(result.data.data)
            setStatus('resolved')
        })
        .catch((error)=>{
            setError(error)
            setStatus('error')
        })
    },[])

    useEffect(()=>{
        setStatus('loading')
        setError(null)
        axios.get('http://localhost:5000/asesor/lista-prestatarios-solicitud')
        .then((result)=>{
            setPrestatariosSolicitud(result.data.data)
            console.log(result.data.data)
            setStatus('resolved')
        })
        .catch((error)=>{
            setError(error)
            setStatus('error')
        })
    },[]);

    function handleSearch(event){
            event.preventDefault();
            fetchProspectos({
                query: search
            })
    }

    function fetchProspectos(params) {
        setStatus('loading')
        setError(null)

        const queryParams = {
            ...params,
        }

        let queryString = Object.keys(queryParams).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key])
        }).join('&')

        axios({
            method: 'get',
            url: `http://localhost:5000/asesor/lista-prospectos?${queryString}`,
        })
            .then((result) => {
                setProspectos(result.data.data)
                setStatus('resolved')
            })
            .catch((error) => {
                setError(error)
                setStatus('error')
            })

            axios({
                method: 'get',
                url: `http://localhost:5000/asesor/lista-prestatarios?${queryString}`,
            })
                .then((result) => {
                    setPrestatarios(result.data.data)
                    setStatus('resolved')
                })
                .catch((error) => {
                    setError(error)
                    setStatus('error')
                })

                axios({
                    method: 'get',
                    url: `http://localhost:5000/asesor/lista-prestatarios-solicitud?${queryString}`,
                })
                    .then((result) => {
                        setPrestatariosSolicitud(result.data.data)
                        setStatus('resolved')
                    })
                    .catch((error) => {
                        setError(error)
                        setStatus('error')
                    })
            
    }

    if(status === 'idle' || status === 'loading'){
        return <h1>Cargando...</h1>
    }

    if(status === 'error'){
        return <h1>Hubo un error</h1>
    }
    
    if(status === 'resolved'){
        return (
            <div className="AesorVerProspectos">
                <header className="AsesorHeader">
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
                                                    <Link to = {`/asesor/editar-prospecto/${prospecto.prospectId}`}><BotonEditar /></Link>
                                                </nav>
                                            </td>
                                        </div>
                                    </tr>
                                )
                            })}
                        </table>
                        <table>
                            {prestatarios.length > 0 && prestatarios.map((prestatario)=>{
                                return(
                                    <tr className="ElementosAsesorProspecto">
                                        <div className="InforamcionDeTablaAsesorProspecto">
                                            <td className="nombreDeProspecto" key={prestatario.prospectId}>{prestatario.nombre} {prestatario.apellidoPaterno} {prestatario.apellidoMaterno}</td>
                                            <td className="BotonEditarParaAsesor">
                                                <nav>
                                                    <Link to = {`/asesor/editar-prestatario/${prestatario.prospectId}`}><BotonEditar /></Link>
                                                </nav>
                                            </td>

                                        </div>
                                    </tr>
                                )
                            })}
                        </table>
                        <table>
                            {prestatariosSolicitud.length > 0 && prestatariosSolicitud.map((prestatarioSol)=>{
                                return(
                                    <tr className="ElementosAsesorProspecto">
                                        <div className="InforamcionDeTablaAsesorProspecto">
                                            <td className="nombreDeProspecto" key={prestatarioSol.prospectId}>{prestatarioSol.nombre} {prestatarioSol.apellidoPaterno} {prestatarioSol.apellidoMaterno}</td>
                                            <td className="BotonEditarParaAsesor">
                                                <nav>
                                                    <Link to = {`/asesor/editar-prestatario/${prestatarioSol.prospectId}`}><BotonEditar /> </Link>
                                                </nav>
                                            </td>
                                            <td className="BotonEstatusparaAsesor">
                                                { `${prestatarioSol.estatus}` === "En proceso" ? <BotonEstatus estatus = "enEspera"/> : <BotonEstatus estatus = {prestatarioSol.estatus}/>}
                                            </td>
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
}