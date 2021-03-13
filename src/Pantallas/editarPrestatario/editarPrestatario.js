import React from 'react';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import Interruptor from '../../Componentes/InterruptorBooleano/InterruptorBooleano';
import './editarPrestatario.css';
import {Link} from 'react-router-dom';

function EditarPrestatario({idPrestatario,nombre,apellidos,telefono,fecha, direccion,noZorro,credito,nomRef1,numRef1, nomRef2, numRef2}){
    return(
        <div id="contenido">
            <header>
                <nav>
                    <Link to = "/asesor"><FlechaRegresar /></Link>
                </nav>
                <h1>Prospecto #{idPrestatario}</h1>
            </header>
            <div className="cajaEntradas">
                <section>
                    <p> 
                        Nombre(s)* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text"  value={nombre} >
                        </input>
                    </p>
                </section> 
                <section>
                    <p> 
                        Apellidos* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text"  value={apellidos}>
                        </input>
                    </p>
                </section>
                <section className="Fecha">
                    <p>
                        <label> Fecha de Nacimiento</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="date" id="fecha">
                        </input>
                    </p>
                </section>
                <section>
                    <p> 
                        Telefono &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" className="tel"  placeholder={telefono} >
                        </input>
                    </p>
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
                    <p> 
                        Dirección &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" className="dir" placeholder={direccion} >
                        </input>
                    </p>
                </section>
                <section>
                    <p> 
                        Número de cliente zorro &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="number" className="zor" placeholder={noZorro} >
                        </input>
                    </p>
                </section>
                <section>
                   <p>
                        <label > Firma de buró de credito</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Interruptor />

                    </p>
                </section>
                <section>
                   <p>
                        <label >INE</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Interruptor />
                    </p>
                </section>
                <section>
                    <p>Credito solicitado &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text"  placeholder={credito} >
                        </input>
                    </p>
                </section>
                <section>
                    <p>
                        Nombre referencia 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" className="referencia" placeholder={nomRef1} >
                        </input>
                    </p>
                </section>
                <section>
                    <p>
                        Telefono referencia 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        <input type="text" className="referencia" placeholder={numRef1} >
                        </input>
                    </p>
                </section>
                <section>
                    <p>
                        Nombre referencia 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" className="referencia" placeholder={nomRef2} >
                        </input>
                    </p>
                </section>
                <section>
                    <p>
                        Telefono referencia 2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        <input type="text" className="referencia" placeholder={numRef2} >
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
export default EditarPrestatario;