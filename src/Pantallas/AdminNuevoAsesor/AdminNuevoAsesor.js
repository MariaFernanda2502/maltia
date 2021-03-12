import REACT from 'react';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import './AdminNuevoAsesor.css';
import VentanaGuardado from '../../Componentes/VentanaGuardado/VentanaGuardado';


function AdminNuevoAsesor() {
    let guardadoExito = null;
    let mostrarGuardado = false;
    
    if (mostrarGuardado) {
        guardadoExito = <VentanaGuardado/>;
    } 

    return (
        <div>
            <header className='AdminNuevoAsesor_header'>
                <FlechaRegresar/>
                <div className='AdminNuevoAsesor_div'>
                    <h1 className='AdminNuevoAsesor_h1'> Crear nuevo asesor</h1>
                </div>
            </header>
            <body className='AdminNuevoAsesor_body'>
                <div>
                </div>
                <form className='AdminNUevoAsesor_form'>
                    <input className='AdminNuevoAsesor_input' type='text' placeholder='Nombre(s)*' required />
                    <input className='AdminNuevoAsesor_input' type='text' placeholder='Apellidos'/>
                    <input className='AdminNuevoAsesor_input' type='text' placeholder='Telefono'/>
                    <input className='AdminNuevoAsesor_input' type='email' placeholder='Correo'/>
                    <label>Puesto: </label>
                    <div>
                        <input type='radio' name='puesto'/> <div><p>Asesor</p> </div>
                        <input type='radio' name='puesto'/> <div><p>Analista</p> </div>
                    </div>
                    <select className='AdminNuevoAsesor_input'>
                        <option> --- </option>
                        <option> Departamento </option>
                    </select>
                </form>
                <BotonGuardar/>
                {guardadoExito}
            </body>
        </div>
    );
}

export default AdminNuevoAsesor;