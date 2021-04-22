import React, { useEffect, useState } from 'react';
import './AnalistaVerPrestatarios.css';
import BotonEditar from '../../Componentes/BotonEditar/BotonEditar';
import BotonEstatus from '../../Componentes/BotonEstatus/BotonEstatus';
import Buscador from '../../Componentes/Buscador/Buscador';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function AnalistaVerPrestatarios(props) {
   const [status,setStatus] = useState('idle');
    const [users,setUsers] = useState([]);
    useEffect(() =>{
        setStatus('loading')
        axios.get('http://localhost:5000/analista/lista-prestatarios')
        .then((result) =>{
            setStatus('resolved');
            setUsers(result.data.data)
        })
        .catch((error) =>{})
    },[])

    if (status === 'idle' || status === 'loading') {
        return <h1>Cargando....</h1>
    }
    if (status === 'error') {
        <h1>Hubo un error</h1>
    }
    if (status === 'resolved') {
    return (
        <div className="GeneralVerPrestatarios">
            <header className="BuscadorAnalistas">
            <Link to='/analista'><FlechaRegresar /></Link>    
            <Buscador />
            </header>

            <body className="ContenidoTablaParaAnalistas">
                <div className="TituloPrestatarios">
                    <h3 className="NombreprestaAna">Nombre del prestatario</h3>
                </div>
                <div className="DatosPrestatarioAnalista">
                    <table>
                    {users.length > 0 && users.map((user) =>{
                        return(
                           <tr className="ElementosTablaPrestatarioAnalista">
                           <div className="ElementosDeTablaAnalistaprest">
                              <td className="nombrePrestatarioAnalista" key = {user.prospectId}>{user.nombre}</td>
                              <Link to='/analista/ver-prestatarios/editar'><td className="EditarDatosAnalista"><BotonEditar /></td></Link>
                              <td className="EstatusPesonaAnalista"><BotonEstatus estatus="aprobado"/></td>
                           </div>
                        </tr>  
                        )
                    })}
                        <tr className="ElementosTablaPrestatarioAnalista">
                       
            
        )
                        </tr>
                        <tr className="ElementosTablaPrestatarioAnalista">
                           <div className="ElementosDeTablaAnalistaprest">
                              <td className="nombrePrestatarioAnalista">Efren Aldana Escalona</td>
                              <Link to='/analista/ver-prestatarios/editar'><td className="EditarDatosAnalista"><BotonEditar /></td></Link>
                              <td className="EstatusPesonaAnalista"><BotonEstatus estatus="aprobado"/></td>
                           </div>
                        </tr>
                        <tr className="ElementosTablaPrestatarioAnalista">
                           <div className="ElementosDeTablaAnalistaprest">
                              <td className="nombrePrestatarioAnalista">Efren Aldana Escalona</td>
                              <Link to='/analista/ver-prestatarios/editar'><td className="EditarDatosAnalista"><BotonEditar /></td></Link>
                              <td className="EstatusPesonaAnalista"><BotonEstatus/></td>
                           </div>
                        </tr>
                        <tr className="ElementosTablaPrestatarioAnalista">
                           <div className="ElementosDeTablaAnalistaprest">
                              <td className="nombrePrestatarioAnalista">Efren Aldana Escalona</td>
                              <Link to='/analista/ver-prestatarios/editar'><td className="EditarDatosAnalista"><BotonEditar /></td></Link>
                              <td className="EstatusPesonaAnalista"><BotonEstatus estatus="rechazado"/></td>
                           </div>
                        </tr>
                        <tr className="ElementosTablaPrestatarioAnalista">
                           <div className="ElementosDeTablaAnalistaprest">
                              <td className="nombrePrestatarioAnalista">Efren Aldana Escalona</td>
                              <Link to='/analista/ver-prestatarios/editar'><td className="EditarDatosAnalista"><BotonEditar /></td></Link>
                              <td className="EstatusPesonaAnalista"><BotonEstatus/></td>
                           </div>
                        </tr>
                    </table>
                </div>
            </body>
        </div>
    );
}}