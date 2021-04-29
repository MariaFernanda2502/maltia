import React, { useState, useEffect } from 'react';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import BotonCompletarSolicitud from '../../Componentes/BotonCompletarSolicitud/BotonCompletarSolicitud';
import './prospectoPantalla.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Select from 'react-select';
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
                swal({
                    title: "Guardado con éxito",
                    icon: "success",
                    width:'50%',
                    backdrop: true,
                    customClass: {
                        popup: 'contenedorAlert',
                    },
                    confirmButtonColor: '#FBFCFC'
                  });
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

    const contacto = [
        { value: 'Contacto 1', label: 'Contacto 1' },
        { value: 'Contacto 2', label: 'Contacto 2' },
        { value: 'Contacto 3', label: 'Contacto 3' },
      ]

      const compromis = [
        { value: 'Compromiso 1', label: 'Compromiso 1' },
        { value: 'Compromiso 2', label: 'Compromiso 2' },
        { value: 'Compromiso 3', label: 'Compromiso 3' },
        { value: 'Compromiso 4', label: 'Compromiso 4' },
        { value: 'Compromiso 5', label: 'Compromiso 5' }
      ]
      
    
    if(status==='error'){
        <h1>Error</h1>
    }

    if(status === 'loading'){
        return <h1>Cargando..</h1>
    }
    if(status=== 'pristine' || status === 'dirty'){
    return(
        <div id="contenido">
            <form className="AdminEditarAnalista_form" onSubmit={handleSave}>
                <section className='AdminEditarAnalista_div'>
                    <lable 
                        htmlFor="nombre" 
                        className='AdminEditarAnalista_label'>
                    Nombre</lable>
                    <input 
                        type="text" 
                        name="nombre" 
                        className='AdminEditarAnalista_input' 
                        value={nombre} 
                        onChange={handleChange}>
                    </input>
                </section>
                <section className='AdminEditarAnalista_div'>

                    <lable 
                        htmlFor="apellidoPaterno" 
                        className='AdminEditarAnalista_label'>
                    Apellido Paterno</lable>
                    <input 
                        type="text" 
                        name="apellidoPaterno" 
                        className='AdminEditarAnalista_input' 
                        value={apellidoPaterno} 
                        onChange={handleChange}>
                    </input>
                </section>

                <section className='AdminEditarAnalista_div'>
                    <lable htmlFor="apellidoMaterno" className='AdminEditarAnalista_label'>Apellido Materno</lable>
                    <input type="text" name="apellidoMaterno" className='AdminEditarAnalista_input' value={apellidoMaterno} onChange={handleChange}></input>
                </section>
                <section className='AdminEditarAnalista_div'>
                    <label htmlFor = "telefono" className='AdminEditarAnalista_label'>Teléfono</label>
                    <input type="text" name="telefono" className='AdminEditarAnalista_input' value={telefono} onChange={handleChange}></input>
                </section>
                
                <section className="selectopciones">
                    <Select className="selectCuadro" options= {contacto}>
                    </Select>
                </section>  
                <section className="selectopciones">
                    <Select className="selectCuadro" options = {compromis}>
                    </Select>
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