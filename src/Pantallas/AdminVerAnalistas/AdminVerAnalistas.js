import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importar axios
import './AdminVerAnalistas.css';
import BotonEditar from '../../Componentes/BotonEditar/BotonEditar';
import Buscador from '../../Componentes/Buscador/Buscador';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import BotonDesactivar from '../../Componentes/BotonDesactivar';
import BotonNuevoAnalista from '../../Componentes/BotonNuevoAnalista/BotonNuevoAnalista';
import { Link } from 'react-router-dom';

export default function AdminVerAnalistas(props) {
    const [status, setStatus] = useState('idle'); 
    const [error, setError] = useState(null); 
    const [analistas, setAnalistas] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setStatus('Loading')
        setError(null);
        axios.get('http://localhost:5000/admin/analistas')
        .then((result) => {
            setStatus('Resolved')
            setAnalistas(result.data.data)
        })
        .catch((error) => {
            setError(error)
            setStatus('Error')
        })
    }, [])

    function fetchAnalistas(params) {
        setStatus('Loading')
        setError(null)

        const queryParams = {
            ...params,
        }

        let queryString = Object.keys(queryParams).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key])
        }).join('&')

        axios({
            method: 'get',
            url: `http://localhost:5000/admin/analistas?${queryString}`,
        })
            .then((result) => {
                setAnalistas(result.data.data)
                setStatus('Resolved')
            })
            .catch((error) => {
                setError(error)
                setStatus('Error')
            })
    }

    function handleDelete(userId) {
        axios.delete(`http://localhost:5000/admin//analistas/eliminar/${userId}`)
        
            .then((result) => {
                const newAnalistas = analistas.filter((analista) => analista.userId !== userId)
                setAnalistas(newAnalistas)
                setStatus('Resolved')
            })
            .catch (error => {
                setError(error)
                setStatus('Error')
            })
    }

    function handleSearch(event) {
        event.preventDefault();
        fetchAnalistas({
            query: search
        })
    }

    if(status === 'idle' || status === 'Loading') {
        return <h1> loading... </h1>
    }

    if(status === 'Error') {
        return (
            <div role='alert'>
                <p> You have one error </p>
                <pre>{error.message}</pre> 
            </div>
        )
    }

    if(status === 'Resolved') {
        return (
            <div className="AdminVerAnalistas">
                <header className="AdminVerAnalistasHeader">
                    <nav>
                        <Link to = "/admin"><FlechaRegresar /></Link>
                    </nav>
                    <form onSubmit={handleSearch}>
                        <label> Buscador: </label>
                        <input 
                            type="text"
                            placeholder="Introduce tu busqueda"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </header>
                <body className="ContenidoParaAdminVerAnalistas">
                    <div className="CuadroNombreAnalista">
                        <h3 className="NombreAnalistaTitulo">Nombre del analista</h3>
                    </div>
                    <div className="DatosDeAdminVerAnalista">
                        <table>
                            {analistas.length > 0 && analistas.map((analista) => {
                                return (
                                    <tr className="ElementosTablaAdminVerAnalista">
                                        <div className="InforamcionDeTablaAdminAnalista">
                                            <td className="nombreDeAnalista" key={analista.userId}> 
                                                {analista.nombre} {analista.apellidoMaterno} {analista.apellidoPaterno}
                                            </td>
                                            <td className="BotonEditarParaAnalista">
                                                <nav>
                                                    <Link to ={`/admin/analistas/${analista.userId}`}>
                                                        <BotonEditar />
                                                    </Link>
                                                </nav>
                                            </td>
                                            <td className="BotonDesactivarParaAnalista">
                                                <button type="button" onClick={() => handleDelete(analista.userId)}>
                                                    Eliminar
                                                </button>
                                            </td>
                                        </div>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </body>
                <footer className="FooterAdminVerAnalista">
                    <nav>
                        <Link to = "/admin/analistas/nuevo"><BotonNuevoAnalista /></Link>
                    </nav>
                </footer>
            </div>
        )
    }
}