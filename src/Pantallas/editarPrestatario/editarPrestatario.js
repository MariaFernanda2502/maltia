import React, { useState, useEffect } from 'react';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import Interruptor from '../../Componentes/InterruptorBooleano/InterruptorBooleano';
import './editarPrestatario.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Select from 'react-select'

function EditarPrestatario(props){

    const [status, setStatus] = useState('pristine');
    const [error, setError] = useState(null)
    const [prospecto, setProspecto] = useState({});
    const [prestatario, setPrestatario] = useState({});
    const [solicitud, setSolicitud] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:5000/asesor/informacion-prospecto/${props.match.params.id}`)
        .then((result)=>{
            setProspecto(result.data.data)
            setStatus('resolved')
        })
        .catch((error)=>{
            setError(error)
            setStatus('error')
        })
    },[]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/asesor/informacion-prestatario/${props.match.params.id}`)
        .then((result)=>{
            setPrestatario(result.data.data)
            setStatus('resolved')
        })
        .catch((error)=>{
            setError(error)
            setStatus('error')
        })
    },[]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/asesor/informacion-solicitud/${props.match.params.id}`)
        .then((result)=>{
            setSolicitud(result.data.data)
            setStatus('resolved')
        })
        .catch((error)=>{
            setError(error)
            setStatus('error')
        })
    },[]);

    function handleChange(event){
        let actualizar={
            ...prospecto,
            [event.target.name]: event.target.value, 
        }
        
        setProspecto(actualizar)
        setStatus('dirty')
    }

    function changePrestatario(event){
        let actualizarPrestatario={
            ...prestatario,
            [event.target.name]: event.target.value,
        }
        setPrestatario(actualizarPrestatario)
        setStatus('dirty')
    }

    function changeSolicitud(event){
        let actualizarSolicitud={
            ...solicitud,
            [event.target.name]: event.target.value,
        }
        setSolicitud(actualizarSolicitud)
        setStatus('solicitud')
    }

    function handleBoolC(event) {
        console.log('*** checked:', event.target.checked);
        console.dir(event)
        let actualizar={
            ...prestatario,
            [event.target.name]: event.target.checked,
            
        }
        setPrestatario(actualizar)
        setStatus('dirty')
    }


    function BotonEnviarSolicitud(){
        if(prospecto.nombre !== null && prospecto.apellidoPaterno !== null && prospecto.apellidoMaterno !== null &&
        prospecto.telefono !== null && prestatario.numClienteZorro !== null && 
        prestatario.firmaBuro === true && prestatario.ine === true ){
            return(
                <button className="BotonGuardar" type="submit" onClick={enviarSolicitud}> Enviar Solicitud </button>
            )
        }
        else{
            return(
                null
            )
        }
    }

    function save(event){
        event.preventDefault();
        setStatus('loading')
        const action ='patch';
        const url = `http://localhost:5000/asesor/editar-prospectos/${prospecto.prospectId}`;
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

        const action1 ='patch';
        const url1 = `http://localhost:5000/asesor/editar-prestatario/${prospecto.prospectId}`;
        axios({
            method: action1,
            url: url1,
            data: prestatario,
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

    function enviarSolicitud(event){
        event.preventDefault();
        setStatus('loading')
        const action ='patch';
        const url = `http://localhost:5000/asesor/editar-prospectos/${prospecto.prospectId}`;
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

        const action1 ='patch';
        const url1 = `http://localhost:5000/asesor/editar-prestatario/${prospecto.prospectId}`;
        axios({
            method: action1,
            url: url1,
            data: prestatario,
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

            const action2 ='post';
            const url2 = `http://localhost:5000/asesor/crear-solicitud/${prospecto.prospectId}/solicitado/${solicitud.creditoSolicitado}`;
            axios({
                method: action2,
                url: url2,
                data: solicitud,
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
      


    return(
        <div id="contenido">
            <header>
                <nav>
                    <Link to = "/asesor"><FlechaRegresar /></Link>
                </nav>
                <h1 className='AdminEditarAnalista_h1'>Prestatario #{prospecto.prospectId}</h1>
            </header>
            <form className="AdminEditarAnalista_form">
                <section className='AdminEditarAnalista_div'>
                    <label htmlFor="nombre" className='AdminEditarAnalista_label'>Nombre(s)*</label>
                    <input type="text" className='AdminEditarAnalista_input'  value={prospecto.nombre} onChange={handleChange} name="nombre"></input>
                </section> 
                <section className='AdminEditarAnalista_div'>
                    <label htmlFor="apellidoPaterno" className='AdminEditarAnalista_label'>Apellido Paterno*</label>
                    <input type="text" className='AdminEditarAnalista_input' value={prospecto.apellidoPaterno} onChange={handleChange} name="apellidoPaterno"></input>
                </section>
                <section className='AdminEditarAnalista_div'>
                    <label htmlFor="apellidoMaterno" className='AdminEditarAnalista_label'>Apellido Materno*</label>
                    <input type="text" className='AdminEditarAnalista_input' value={prospecto.apellidoMaterno} onChange={handleChange} name="apellidoMaterno"></input>
                </section>

                <section className='AdminEditarAnalista_div'>
                    <label htmlFor = "fechaNacimiento" className='AdminEditarAnalista_label'> Fecha de Nacimiento*</label>
                    <input type="date" 
                        className='AdminEditarAnalista_input'
                        defaultValue={prestatario.fechaNacimiento} 
                        name="fechaNacimiento" 
                        onChange={changePrestatario}></input>
                </section>

                <section className='AdminEditarAnalista_div'>
                    <label htmlFor="telefono"  className='AdminEditarAnalista_label'>Telefono*</label>
                    <input type="text" className='AdminEditarAnalista_input' value={prospecto.telefono} onChange={handleChange} name="telefono"></input>
                </section>

                <section className="selectopciones">
                    <Select className="selectCuadro" options= {contacto}>
                    </Select>
                </section>  
                <section className="selectopciones">
                    <Select className="selectCuadro" options = {compromis}>
                    </Select>
                </section>

                <section className='AdminEditarAnalista_div'>
                    <label htmlFor="direccion" className='AdminEditarAnalista_label'>Direcion*</label>
                    <input type="text" className='AdminEditarAnalista_input' value={prestatario.direccion} onChange={changePrestatario} name="direccion" >

                    </input>
                </section>

                <section className='AdminEditarAnalista_div'>
                    <label htmlFor="numClienteZorro" className='AdminEditarAnalista_label'>Numero de cliente Zorro*</label>
                    <input type="number"  className='AdminEditarAnalista_input' value={prestatario.numClienteZorro} onChange={changePrestatario} name="numClienteZorro"></input>
                </section>
                
                <section className='AsesorInterruptores'>
                        <label htmlFor="firmaBuro" className='AdminEditarAnalista_label'>Firma de buró de credito</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Interruptor checked={prestatario.firmaBuro} onClick={handleBoolC} name="firmaBuro"/>
                </section>

                <section className='AsesorInterruptores'>
                        <label htmlFor="ine" className='AdminEditarAnalista_label'>INE</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Interruptor  checked={prestatario.ine} onClick={handleBoolC} name="ine"/> 
                </section >

                <section className='AdminEditarAnalista_div'>
                    <label htmlFor="creditoSolicitado" className='AdminEditarAnalista_label'>Credito solicitado</label>
                    <input type="text" className='AdminEditarAnalista_input' value={solicitud.creditoSolicitado} onChange={changeSolicitud} name="creditoSolicitado">     
                    </input>
                </section>
                
                <section className='AdminEditarAnalista_div'>
                    <label htmlFor="nombreRefererenciaUno" className='AdminEditarAnalista_label'>Nombre Referencia 1</label>
                    <input type="text" className='AdminEditarAnalista_input' value={prestatario.nombreRefererenciaUno} onChange={changePrestatario} name="nombreRefererenciaUno" >
                    </input>
                </section>
                
                <section className='AdminEditarAnalista_div'>
                    <label htmlFor="telefonoReferenciaUno" className='AdminEditarAnalista_label'>Telefono referencia 1</label> 
                    <input type="text" className='AdminEditarAnalista_input' value={prestatario.telefonoReferenciaUno} onChange={changePrestatario} name="telefonoReferenciaUno">
                    </input>
                </section>

                <section className='AdminEditarAnalista_div'>
                <label htmlFor="nombreReferenciaDos" className='AdminEditarAnalista_label'>Nombre referencia 2 </label>
                        <input type="text" className='AdminEditarAnalista_input' value={prestatario.nombreReferenciaDos} onChange={changePrestatario} name ="nombreReferenciaDos">
                        </input>
                </section>

                <section className='AdminEditarAnalista_div'>
                <label htmlFor="telefonoReferenciaDos" className='AdminEditarAnalista_label'>Telefono referencia 2</label>
                        <input type="text" className='AdminEditarAnalista_input' value={prestatario.telefonoReferenciaDos} onChange={changePrestatario} name="telefonoReferenciaDos">
                        </input>
                </section>

            </form>  
            <section className="botones">
                <section>
                    <button className = "BotonGuardar" type="submit" onClick={save}> Guardar</button>
                </section>
            <section>
                {BotonEnviarSolicitud()}
            </section>
            </section>    
        </div>
    )
}
export default EditarPrestatario;