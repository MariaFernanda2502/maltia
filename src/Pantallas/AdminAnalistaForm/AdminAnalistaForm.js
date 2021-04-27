import Select from 'react-select';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import './AdminAnalistaForm.css';
import VentanaGuardado from '../../Componentes/VentanaGuardado/VentanaGuardado';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function AdminAnalistaForm(props) {
    let guardadoExito = null;
    let mostrarGuardado = false;
    
    if (mostrarGuardado) {
        guardadoExito = <VentanaGuardado/>;
    } 

    const [analista, setAnalista] = useState(props.analista);
    const [status, setStatus] = useState('pristine');
    const [error, setError] = useState(null)

    const {
        userId,
        nombre, 
        apellidoPaterno,
        apellidoMaterno,
        telefono, 
        correo,
    } = analista;

    function handleChange(event) {
        let nuevoAnalista = {
            ...analista,
            [event.target.name]: event.target.value,
        };
        setAnalista(nuevoAnalista)
        setStatus('dirty')
    }

    function handleSave(event) {
        event.preventDefault()

        setStatus('Loading')
        setError(null)

        const action = analista.userId ? 'patch' : 'post'; 
        const url = analista.userId ? `http://localhost:5000/admin/analistas/editar/${analista.userId}` : 'http://localhost:5000/admin/analistas/crear';

        axios({
            method: action,
            url: url,
            data: analista,
            headers: {
                'Content-type': 'application/JSON; charset=UFT-8'
            }
        })
            .then((result) => {
                props.onSave(result.data.data)
                setStatus('pristine')
            })
            .catch (error => {
                setError(error)
                setStatus('error')
            })
    }

    if(status === 'idle' || status === 'Loading') {
        return <h1> loading... </h1>
    }

    if(status === 'error') {
        return (
            <div role='alert'>
                <p> You have one error </p>
                <pre>{error.message}</pre> 
            </div>
        )
    }

    if(status === 'pristine' || status === 'dirty') {
        return (
            <div>
                <header>
                    <nav>
                        <Link to = "/admin/analistas"><FlechaRegresar/></Link>
                    </nav>
                </header>
                    
                <body className='AdminEditarAnalista_body'>
                    <h1 className='AdminEditarAnalista_h1'> Analista {userId} </h1>
                    <form className='AdminEditarAnalista_form'>
                        <div className='AdminEditarAnalista_div'>
                            <label htmlFor='nombre' className='AdminEditarAnalista_label'>Nombre(s) *</label>
                            <input 
                                name='nombre' 
                                className='AdminEditarAnalista_input' 
                                type='text' 
                                value={nombre} 
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='AdminEditarAnalista_div'>
                            <label htmlFor='apellidoPaterno' className='AdminEditarAnalista_label'>Apellido Paterno *</label>
                            <input 
                                name='apellidoPaterno' 
                                className='AdminEditarAnalista_input' 
                                type='text' 
                                value={apellidoPaterno} 
                                onChange={handleChange}
                                required/>
                        </div>
                        <div className='AdminEditarAnalista_div'>
                            <label htmlFor='apellidoMaterno' className='AdminEditarAnalista_label'>Apellido Materno *</label>
                            <input 
                                name='apellidoMaterno' 
                                className='AdminEditarAnalista_input' 
                                type='text' 
                                value={apellidoMaterno} 
                                onChange={handleChange}
                                required/>
                        </div>
                        <div className='AdminEditarAnalista_div'>
                            <label htmlFor='telefono' className='AdminEditarAnalista_label'>Teléfono *</label>
                            <input 
                                name='telefono' 
                                className='AdminEditarAnalista_input' 
                                type='text' 
                                value={telefono} 
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='AdminEditarAnalista_div'>
                            <label htmlFor='correo' className='AdminEditarAnalista_label'>Correo *</label>
                            <input 
                                name='correo' 
                                className='AdminEditarAnalista_input' 
                                type='email' 
                                value={correo} 
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </form>
                    <div >
                        
                        <label className='AdminEditarAnalista_la'>Departamento</label>
                        <Select 
                            defaultValue = {['OFICINA CENTRAL']}
                            name='Departamentos'
                            //options={Departamentos}
                            className='AdminEditarAnalista_select'
                            classNamePrefix="select"
                            placeholder = 'Departamentos'
                        />
                    </div>
                    { (status === 'dirty') 
                        ? (
                            <button
                                type='submit'
                                className='button' 
                                onClick={handleSave}> 
                                Save
                            </button>
                        ) : null
                    } 
                    {guardadoExito}
                </body>
            </div>
        )
    }
}

export default AdminAnalistaForm;

