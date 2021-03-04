import React from 'react';
import './Login.css';
import Logo from './logoM.png';
function Login() {
    return(
        <div id = "contenido">
            <section id="imagenLogo">
                <img id="logo" src={Logo}/>
            </section>
            <section>
                
                <div className="cajaUsuario">
                     <div className="cajaUsuarioTitulo" id="cajaUsuarioTitulo" >
                        <p>USUARIO</p>
                    </div>
                        <div className="cajaUsuarioInput">
                        <input type="text" placeholder="abc000000"> 
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
                        <input type="password" placeholder="Ingresa contraseña"> 
                        </input>
                    </div>
                </div>
                    
                
            

            </section>
        </div>
    );
}

export default Login;
