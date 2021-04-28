import React, { useState, useEffect } from 'react';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import Interruptor from '../../Componentes/InterruptorBooleano/InterruptorBooleano';
import './editarPrestatario.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
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
        axios.get(`http://localhost:5000/asesor/crear-prestatario/${props.match.params.id}`)
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

    //const [prospectId, nombre, apellidoPaterno, telefono] = prospecto;
    //const [direccion, numClienteZorro, fechaNacimiento, firmaBuro, ine ] = prestatario;
    return(
        <div id="contenido">
            <header>
                <nav>
                    <Link to = "/asesor"><FlechaRegresar /></Link>
                </nav>
                <h1>Prestatario #{prospecto.prospectId}</h1>
            </header>
            <form className="cajaEntradas">
                <section>
                    <label>Nombre(s)*</label>
                    <input type="text"  value={prospecto.nombre} ></input>
                </section> 
                <section>
                    <label>Apellido Paterno*</label>
                    <input type="text"  value={prospecto.apellidoPaterno}></input>
                </section>
                <section>
                    <label>Apellido Materno*</label>
                    <input type="text"  value={prospecto.apellidoMaterno}></input>
                </section>

                <section className="Fecha">
                    <label> Fecha de Nacimiento*</label>
                    <input type="date" id="fecha"></input>
                </section>

                <section>
                    <label>Telefono*</label>
                    <input type="text" className="tel"  placeholder={prospecto.telefono} ></input>
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

                <section>
                    <label>Direcion*</label>
                    <input type="text" className="dir" placeholder={prestatario.direccion} >

                    </input>
                </section>

                <section>
                    <label>Numero de cliente Zorro*</label>
                    <input type="number" className="zor" placeholder={prestatario.numClienteZorro} ></input>
                </section>
                
                <section>
                        <label>Firma de buró de credito</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Interruptor />
                </section>

                <section>
                        <label >INE</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Interruptor /> 
                </section>

                <section>
                    <label>Credito solicitado</label>
                    <input type="text" placeholder={solicitud.creditoSolicitado} >     
                    </input>
                </section>
                
                <section>
                    <p>
                        Nombre referencia 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" className="referencia"  >
                        </input>
                    </p>
                </section>
                <section>
                    <p>
                        Telefono referencia 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        <input type="text" className="referencia"  >
                        </input>
                    </p>
                </section>
                <section>
                    <p>
                        Nombre referencia 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" className="referencia"  >
                        </input>
                    </p>
                </section>
                <section>
                    <p>
                        Telefono referencia 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        <input type="text" className="referencia" >
                        </input>
                    </p>
                </section>

            </form>  
            <section className="botones">
                <section>
                        <BotonGuardar />
                </section>

            </section>    
        </div>
    )
}
export default EditarPrestatario;