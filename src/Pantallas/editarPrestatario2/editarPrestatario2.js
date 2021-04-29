import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import Interruptor from '../../Componentes/InterruptorBooleano/InterruptorBooleano';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AsyncSelect from 'react-select/async';
import '../../Componentes/InterruptorBooleano/InterruptorBooleano.css'
function EditarPrestatario2(props){
    const [prospecto, setProspecto] = useState({});
    const [status,setStatus] =useState('pristine');
    const [error, setError] = useState(null);
   


    useEffect(()=>{
        //get all users
        axios.get(`http://localhost:5000/analista/ver-prestatarios/${props.match.params.prospectId}`)
        .then((result)=>{
            setProspecto(result.data.data[0])
            console.log(result.data.data[0])
        })
        .catch((error)=>{})
    },[])
    
    function handleChange(event){
        console.dir(event)
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
        const action = 'patch';
        const url = `http://localhost:5000/analista/editar-solicitud-prestatario/${prospecto.prospectId}` 
        axios({
            method: action,
            url: url,
            data: prospecto,
            headers:{
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then((result)=>{
                
                //props.onSave(result.data.data)
                setStatus('pristine')
            })
            .catch(error=>{
                setError(error)
                setStatus('error')
            })
    }
    const options = [
        { value: 'En proceso', label: 'En proceso'},
        { value: 'Aceptado', label: 'Aceptado' },
        { value: 'Rechazado', label: 'Rechazado' }
    ]
    function handleBoolC(event) {
        console.log('*** checked:', event.target.checked);
        console.dir(event)
        let actualizar={
            ...prospecto,
            [event.target.name]: event.target.checked,

        }
        setProspecto(actualizar)
        setStatus('dirty')
    }

   function handleDropC(event) {
       console.log(event.target.name)
   }

    if(status==='error'){
        <h1>Error</h1>
    }

    if(status === 'loading'){
        return <h1>Cargando..</h1>
    }
    if(status=== 'pristine' || status === 'dirty'){
    return(
        <form id="contenido">
        <header>
            <Link to='/analista/ver-prestatarios'><FlechaRegresar /></Link>
        
            <h1>Prospecto #{prospecto.prospectId}</h1>
        </header>
        <form className="cajaEntradas">
            <section>
                <p> 
                    <label htmlFor="antiguedad">Antiguedad en meses</label> &nbsp;&nbsp;&nbsp;
                    <input type="number" value={prospecto.antiguedad} onChange={handleChange} name="antiguedad">
                    </input>
                </p>
            </section> 
            <section>
                <p> 
                    <label htmlFor="capacidadPago">Capacidad de pago en pesos $ </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text"  value={prospecto.capacidadPago} onChange={handleChange} name="capacidadPago">
                    </input>
                </p>
            </section>

            <section>
                <p> 
                    <label htmlFor="creditoSolicitado">Credito solicitado en pesos $ </label>&nbsp;&nbsp;&nbsp;
                    <input type="text"  value={prospecto.creditoSolicitado} onChange={handleChange} name="creditoSolicitado">
                    </input>
                </p>
            </section>

            <section>
               <p>
                    <label htmlFor="altaISI"> Alta en ISI</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Interruptor checked={prospecto.altaISI} onClick={handleBoolC} name="altaISI"/>
                    
                </p>
            </section>

            <section>
                <p> 
                    <label htmlFor="fechaAltaISI">Fecha de alta en ISI</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="date"    onChange={handleChange} value={prospecto.fechaAltaISI} name="fechaAltaISI">
                    </input>
                </p>
            </section> 
            
            <section>
                <p>
                    <label htmlFor="estatus">Estatus de Credito</label> &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text"  value={prospecto.estatus}  onChange={handleDropC} name="estatus" >
                    </input>
        
                </p>
                
            </section>  
            <section>
                <p> 
                    <label htmlFor="creditoAutorizado">Credito autorizado en pesos $</label>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" className="tel"  value={prospecto.creditoAutorizado} onClick={handleChange} name="creditoAutorizado">
                    </input>
                </p>
            </section>

            <section>
                <p> 
                    <label htmlFor="fechaAutorizacion">Fecha de autorización </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="date"   value={prospecto.fechaAutorizacion} onChange={handleChange} name="fechaAutorizacion">
                    </input>
                </p>
            </section> 

        </form>  
        <section className="botones">
            <BotonGuardar 
                type ="submit" 
                className="BotonGuardar" 
                disabled={status !== 'dirty'}  
                onClick={handleSave}
            />

        </section>    
    </form>
        )
    }
}
    
export default EditarPrestatario2;