import React, { useState } from 'react';
import './Login.css';
import Logo from './logoM.png';
import { useAuth } from '../../auth-context';
import { Link } from 'react-router-dom';

function Login(props) {
    const { employee, login, register } = useAuth();

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
  
    function handleChangeCorreo(e) {
        setCorreo(e.target.value);
    }
  
    function handleChangeContrasena(e) {
        setContrasena(e.target.value);
    }
  
    function handleLogin(e) {
        console.log(e);
        e.preventDefault();
        login({
            correo,
            contrasena,
        }) 
    }

    return(
        <div id = "contenido">
            <section id="imagenLogo">
                <img id="logo" src={Logo}/>
            </section>
            <form onSubmit={handleLogin}>
                <section>
                    <div className="cajaUsuario">
                        <div className="cajaUsuarioTitulo" id="cajaUsuarioTitulo" >
                            <p>USUARIO</p>
                        </div>
                            <div className="cajaUsuarioInput">
                            <input onChange={handleChangeCorreo} value={correo} type="text" placeholder="abc000000"> 
                            </input>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="cajaContraseña">
                        <div>
                            <p>CONTRASEÑA</p>
                        </div>
                            <div>
                            <input onChange={handleChangeContrasena} value={contrasena} type="password" placeholder="Ingresa contraseña"> 
                            </input>
                        </div>
                    </div>
                </section>
                <section className="botonInicio">
                        <button type="submit">
                            Iniciar sesión 
                        </button>
                </section>
            </form>
        </div>
    );
}

export default Login;
