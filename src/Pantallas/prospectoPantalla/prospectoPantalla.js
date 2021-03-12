import React from 'react';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import BotonCompletarSolicitud from '../../Componentes/BotonCompletarSolicitud/BotonCompletarSolicitud';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import './prospectoPantalla.css';
function prospectoPantalla(){
    return(
        <div id="contenido">
            <header>
                <div className="botonFlecha">
                    <FlechaRegresar />
                </div>
                <h1>Prospecto</h1>
            </header>
            <div className="cajaEntradas">
                <section>
                    <input type="text" placeholder="Nombres(s)*"> 
                    </input>
                </section> 
                <section>
                    <input type="text" placeholder="Apellidos*"> 
                    </input>
                </section>
                <section>
                    <input type="text" placeholder="Teléfono*"> 
                    </input>
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
            </div>  
            <section className="botones">
                <section>
                        <BotonGuardar />
                </section>

                <section>
                    <BotonCompletarSolicitud />
                </section>
            </section>    
        </div>
    )
}
export default prospectoPantalla;