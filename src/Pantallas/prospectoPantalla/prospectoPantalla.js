import React, { useState, useEffect } from 'react';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import BotonCompletarSolicitud from '../../Componentes/BotonCompletarSolicitud/BotonCompletarSolicitud';
import './prospectoPantalla.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

function ProspectoPantalla(props){
    
    const [status,setStatus] =useState('pristine');
    const [error, setError] = useState(null);
    const [prospecto, setProspecto] = useState(props.prospecto);
    const{prospectId, 
        nombre, 
        apellidoPaterno, 
        apellidoMaterno, 
        telefono
    } = prospecto;

    function handleChange(event){
        let actualizar={
            ...prospecto,
            [event.target.name]: event.target.value, 
        }
        setProspecto(actualizar)
        setStatus('dirty')
    }

    function handleSave(event){
        event.preventDefault();
        setStatus('loading')
        const action = prospecto.prospectId ? 'patch' : 'post';
        const url = prospecto.prospectId ? `http://localhost:5000/asesor/editar-prospectos/${prospecto.prospectId}` : `http://localhost:5000/asesor/crear-prospecto`;
        axios({
            method: action,
            url: url,
            data: prospecto,
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then((result)=>{
                console.log(result.data.data.nombre)
                //props.onSave(result.data.data)
                setStatus('pristine')
            })
            .catch(error=>{
                setError(error)
                setStatus('error')
            })
    }

    function renderContent() {
        if(prospecto.prospectId) {
            return (
            <nav>
                <Link to={`/asesor/editar-prestatario/${prospecto.prospectId}`}>
                    <button 
                        type= "button"
                        className="BotonGuardar"
                        onClick={complete}
                    >
                        Completar Solicitud</button>
                </Link>
            </nav>
            )
        }
        else {
            return  (
                null
            )
        }
    }

    

    function complete(event){
        //event.preventDefault();
        setStatus('loading')
        if(prospecto.prospectId){
            const accion= 'post';
            const url1= `http://localhost:5000/asesor/crear-prestatario/${prospecto.prospectId}`;
            axios({
                method: accion,
                url: url1,
                data: prospecto,
                headers:{
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then((result)=>{
                setStatus('pristine')
            })
            .catch(error =>{
                setError(error)
                setStatus('error')
            })
        }
    }
    if(status==='error'){
        <h1>Error</h1>
    }

    if(status === 'loading'){
        return <h1>Cargando..</h1>
    }
    if(status=== 'pristine' || status === 'dirty'){
    return(
        <div id="contenido">
            <form className="cajaEntradasIn" onSubmit={handleSave}>
                <section>
                    <lable htmlFor="nombre" className="labels">Nombre</lable>
                    <input type="text" name="nombre" value={nombre} onChange={handleChange}></input>
                </section>
                <section>
                    <lable htmlFor="apellidoPaterno" className="labels">Apellido Paterno</lable>
                    <input type="text" name="apellidoPaterno" value={apellidoPaterno} onChange={handleChange}></input>
                </section>
                <section>
                    <lable htmlFor="apellidoMaterno" className="labels">Apellido Materno</lable>
                    <input type="text" name="apellidoMaterno" value={apellidoMaterno} onChange={handleChange}></input>
                </section>
                <section>
                    <label htmlFor = "telefono" className="labels">Teléfono</label>
                    <input type="text" name="telefono" value={telefono} onChange={handleChange}></input>
                </section>
                
                <section>
                    <select>
                        <option>Contacto 1</option>
                        <option>Contacto 2</option>
                        <option>Contacto 3</option>
                    </select>
                </section>  
                <section>
                    <select>
                        <option>Compromiso 1</option>
                        <option>Compromiso 2</option>
                        <option>Compromiso 3</option>
                        <option>Compromiso 4</option>
                        <option>Compromiso 5</option>
                    </select>
                </section>
                <section className="botones">

                    <button 
                        type ="submit" 
                        className="BotonGuardar" 
                        disabled={status !== 'dirty'}  
                        onClick={handleSave}
                    >
                        Guardar</button>
                    <section>
                        {renderContent()}
                    </section>
            </section> 
            </form>     
        </div>
        )
    }
}
export default ProspectoPantalla;