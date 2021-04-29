import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importar axios
import './AdminVerAsesores.css';
import BotonEditar from '../../Componentes/BotonEditar/BotonEditar';
import Buscador from '../../Componentes/Buscador/Buscador';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import BotonDesactivar from '../../Componentes/BotonDesactivar';
import BotonNuevoAsesor from '../../Componentes/BotonNuevoAsesor';
import { Link } from 'react-router-dom';

export default function AdminVerAsesores(props) {
    const [status, setStatus] = useState('idle'); 
    const [error, setError] = useState(null); 
    const [asesores, setAsesores] = useState([]); 
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        setStatus('Loading') 
        setError(null);
        axios.get('http://localhost:5000/admin/asesores')
        .then((result) => {
            setStatus('Resolved')
            setAsesores(result.data.data)
        })
        .catch((error) => {
            setError(error)
            setStatus('Error')
        })
    }, [])

    function fetchAsesores(params) {
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
            url: `http://localhost:5000/admin/asesores?${queryString}`,
        })
            .then((result) => {
                setAsesores(result.data.data)
                setStatus('Resolved')
            })
            .catch((error) => {
                setError(error)
                setStatus('Error')
            })
    }
    
    function handleDelete(userId) {
        axios.delete(`http://localhost:5000/admin/asesores/eliminar/${userId}`)
        
        .then((result) => {
            const newAsesores = asesores.filter((asesor) => asesor.userId !== userId)
            setAsesores(newAsesores)
            setStatus('Resolved')
        })
        .catch (error => {
            setError(error)
            setStatus('Error')
        })
    }

    function handleSearch(event) {
        event.preventDefault();
        fetchAsesores({
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
            <div className="AdminVerAsesores">
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
                <body className="ContenidoParaAdminVerAsesores">
                    <div className="CuadroNombreAsesor">
                        <h3 className="NombreAsesorTitulo">Nombre del asesor</h3>
                    </div>
                    <div className="DatosDeAdminVerAsesores">
                        <table>
                            {asesores.length > 0 && asesores.map((asesor) => {
                                return (
                                    <tr className="ElementosTablaAdminVerAsesores">
                                        <div className="InforamcionDeTablaAdminAsesor">
                                            <td className="nombreDeAsesor" key={asesor.userId} > 
                                                {asesor.nombre} {asesor.apellidoPaterno} {asesor.apellidoMaterno}
                                            </td>
                                            <td className="BotonEditarParaAsesores"> 
                                                <nav>
                                                    <Link to ={`/admin/asesores/${asesor.userId}`}>
                                                        <BotonEditar />
                                                    </Link>
                                                </nav>
                                            </td>
                                            <td className="BotonDesactivarParaAsesor"> 
                                                <button 
                                                    type="button" 
                                                    className='BotonDesactivarBoton' 
                                                    onClick={() => handleDelete(asesor.userId)}>
                                                    Desactivar
                                                </button>
                                            </td>
                                        </div>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </body>
                <footer className="FooterAdminVerAsesor">
                    <nav>
                        <Link to="/admin/asesores/nuevo"><BotonNuevoAsesor /></Link>
                    </nav>
                </footer>
            </div>
        )
    }
}