import Select from 'react-select';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import './AdminNuevoAnalista.css';
import VentanaGuardado from '../../Componentes/VentanaGuardado/VentanaGuardado';
import { Link } from 'react-router-dom';
import { Departamentos } from './Departamentos';


function AdminNuevoAnalista() {
    let guardadoExito = null;
    let mostrarGuardado = false;
    
    if (mostrarGuardado) {
        guardadoExito = <VentanaGuardado/>;
    } 

    return (
        <div>
            <header>
                <nav>
                    <Link to = "/admin/ver-analistas"><FlechaRegresar/></Link>
                </nav>
            </header>
            <body className='AdminNuevoAnalista_body'>
                <h1 className='AdminNuevoAnalista_h1'> Crear un analista</h1>
                <form className='AdminNUevoAnalista_form'>
                    <input className='AdminNuevoAnalista_input' type='text' placeholder='Nombre(s) *' required />
                    <input className='AdminNuevoAnalista_input' type='text' placeholder='Apellidos *' required/>
                    <input className='AdminNuevoAnalista_input' type='text' placeholder='Telefono *' required/>
                    <input className='AdminNuevoAnalista_input' type='email' placeholder='Correo *' required/>
                </form>
                <div >
                    <label className='AdminNuevoAnalista_la'>Departamento</label>
                    <Select 
                        defaultValue = {[Departamentos]}
                        name='Departamentos'
                        options={Departamentos}
                        className='AdminEditarAnalista_select'
                        classNamePrefix="select"
                        placeholder = 'Departamentos'
                    />
                </div>
                <BotonGuardar/>
                {guardadoExito}
            </body>
        </div>
    );
}

export default AdminNuevoAnalista;