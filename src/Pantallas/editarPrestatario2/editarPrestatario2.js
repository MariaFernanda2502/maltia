import React from 'react';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import Interruptor from '../../Componentes/InterruptorBooleano/InterruptorBooleano';

function EditarPrestatario2({idPrestatario,capacidad,autorizado}){
    return(
        <div id="contenido">
            <header>

                <FlechaRegresar />
                <h1>Prospecto #{idPrestatario}</h1>
            </header>
            <div className="cajaEntradas">
                <section>
                    <p> 
                        Antiguedad &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="date">
                        </input>
                    </p>
                </section> 
                <section>
                    <p> 
                        Capacidad de pago &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text"  placeholder={capacidad}>
                        </input>
                    </p>
                </section>
                <section>
                   <p>
                        <label > Alta en ISI</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Interruptor />

                    </p>
                </section>
                <section>
                   <p>
                        <label >Consulta en buró de credito</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Interruptor />
                    </p>
                </section>
                <section>
                    <h5>Estatus de Credito</h5>
                    <select>
                        <option>Seleccione una opcion</option>
                        <option>En procceso</option>
                        <option>Aceptado</option>
                        <option>Rechazado</option>
                    </select>
                </section>  
                <section>
                    <p> 
                        Credito autorizado &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" className="tel"  placeholder={autorizado} >
                        </input>
                    </p>
                </section>

            </div>  
            <section className="botones">
                <section>
                        <BotonGuardar />
                </section>

            </section>    
        </div>
    )
}
export default EditarPrestatario2;