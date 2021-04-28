import Select from 'react-select';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import '../../Componentes/BotonGuardar/BotonGuardar.css';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import './AdminAsesorForm.css';
import VentanaGuardado from '../../Componentes/VentanaGuardado/VentanaGuardado';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

function AdminAsesorForm(props) {
    const [asesor, setAsesor] = useState(props.asesor);
    const [status, setStatus] = useState('pristine');
    const [error, setError] = useState(null);

    const {
        userId,
        nombre, 
        apellidoPaterno,
        apellidoMaterno,
        telefono, 
        correo,
    } = asesor;

    function handleChange(event) {
        let nuevoAsesor = {
            ...asesor,
            [event.target.name]: event.target.value,
        };
        setAsesor(nuevoAsesor)
        setStatus('dirty')
    }

    function handleSave(event) {
        event.preventDefault()

        setStatus('Loading')
        setError(null)

        const action = asesor.userId ? 'patch' : 'post'; 
        const url = asesor.userId ? `http://localhost:5000/admin/asesores/editar/${asesor.userId}` : 'http://localhost:5000/admin/asesores/crear';

        axios({
            method: action,
            url: url,
            data: asesor,
            headers: {
                'Content-type': 'application/JSON; charset=UFT-8'
            }
        })
            .then((result) => {
                props.onSave(result.data.data)
                setStatus('pristine')
                swal({
                    title: "Guardado con exito",
                    icon: "success",
                    width:'50%',
                    backdrop: true,
                    customClass: {
                        popup: 'contenedorAlert',
                    },
                    confirmButtonColor: '#FBFCFC'
                  });
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
                        <Link to = "/admin/asesores"><FlechaRegresar/></Link>
                    </nav>
                </header>

                <body className='AdminEditarAsesor_body'>
                    <h1 className='AdminEditarAsesor_h1'> Asesor {userId} </h1>
                    <form className='AdminEditarAsesor_form'>
                        <div className='AdminEditarAsesor_div'>
                            <label htmlFor='nombre' className='AdminEditarAsesor_label'>Nombre(s) *</label>
                            <input 
                                name='nombre' 
                                className='AdminEditarAsesor_input' 
                                type='text' 
                                value={nombre} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className='AdminEditarAsesor_div'>
                            <label htmlFor='apellidoPaterno' className='AdminEditarAsesor_label'>Apellidos Paterno *</label>
                            <input 
                                name='apellidoPaterno'
                                className='AdminEditarAsesor_input' 
                                type='text' 
                                value={apellidoPaterno} 
                                onChange={handleChange} 
                                required
                            />
                        </div>
                        <div className='AdminEditarAsesor_div'>
                            <label htmlFor='apellidoMaterno' className='AdminEditarAsesor_label'>Apellido Materno *</label>
                            <input 
                                name='apellidoMaterno' 
                                className='AdminEditarAsesor_input' 
                                type='text' 
                                value={apellidoMaterno} 
                                onChange={handleChange} 
                                required
                            />
                        </div>
                        <div className='AdminEditarAsesor_div'>
                            <label htmlFor='telefono' className='AdminEditarAsesor_label'>Teléfono *</label>
                            <input 
                                name='telefono' 
                                className='AdminEditarAsesor_input' 
                                type='text' 
                                value={telefono} 
                                onChange={handleChange} 
                                required
                            />
                        </div>
                        <div className='AdminEditarAsesor_div'>
                            <label htmlFor='correo' className='AdminEditarAsesor_label'>Correo *</label>
                            <input 
                                name='correo' 
                                className='AdminEditarAsesor_input' 
                                type='email' 
                                value={correo} 
                                onChange={handleChange} 
                                required
                            />
                        </div>
                    </form>
                    <div>
                        <label className='AdminEditarAsesor_la'>Tiendas</label>
                        <Select 
                            defaultValue = {['Tienda1']}
                            isMulti
                            name='Tiendas'
                            //options={Tiendas}
                            className='AdminEditarAsesor_select'
                            classNamePrefix="select"
                            placeholder = 'Tiendas'
                        />
                    </div>
                    { (status === 'dirty') 
                        ? (
                            <div className='BotonGuardar'>
                                <button 
                                    type='submit' 
                                    className='BotonGuardar'
                                    onClick={handleSave}
                                > 
                                    Guardar
                                </button>
                            </div>
                        ) : null
                    } 
                </body>
            </div>
        )
    }
}

export default AdminAsesorForm;