import React, { useEffect, useState } from 'react';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import Interruptor from '../../Componentes/InterruptorBooleano/InterruptorBooleano';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
                    <label htmlFor="Antiguedad">Antiguedad</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="date" value={prospecto.antiguedad} onChange={handleChange} name="Antiguedad">
                    </input>
                </p>
            </section> 
            <section>
                <p> 
                    <label htmlFor="capacidadPago">Capacidad de pago </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text"  value={prospecto.capacidadPago} onChange={handleChange} name="capacidadPago">
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
                    <label htmlFor="Buro">Consulta en buró de credito</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
            </section>
            <section>
                <h5>Estatus de Credito</h5>
                <select>
                    <option>Seleccionar</option>
                    <option>En procceso</option>
                    <option>Aceptado</option>
                    <option>Rechazado</option>
                </select>
            </section>  
            <section>
                <p> 
                    <label htmlFor="creditoAutorizado">Credito autorizado</label>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" className="tel"  value={prospecto.creditoAutorizado} onChange={handleChange} name="creditoAutorizado">
                    </input>
                </p>
            </section>

        </form>  
        <section className="botones">
        <button 
                    type ="submit" 
                    className="BotonGuardar" 
                    disabled={status !== 'dirty'}  
                    onClick={handleSave}
        >
                    Guardar</button>

        </section>    
    </form>
        )
    }
}
    
export default EditarPrestatario2;