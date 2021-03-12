import Select from 'react-select';
import { Tiendas } from '../AdminNuevoAsesor/Tiendas';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import './AdminEditarAsesor.css';
import VentanaGuardado from '../../Componentes/VentanaGuardado/VentanaGuardado';
import { Link } from 'react-router-dom';


function AdminEditarAsesor() {
    let guardadoExito = null;
    let mostrarGuardado = false;
    
    if (mostrarGuardado) {
        guardadoExito = <VentanaGuardado/>;
    } 

    return (
        <div>
            <header>
                <nav>
                    <Link to = "/admin/ver-asesores"><FlechaRegresar/></Link>
                </nav>
            </header>
            <body className='AdminEditarAsesor_body'>
                <h1 className='AdminEditarAsesor_h1'> Asesor #9763</h1>
                <form className='AdminEditarAsesor_form'>
                    <input className='AdminEditarAsesor_input' type='text' placeholder='Nombre(s) *' required />
                    <input className='AdminEditarAsesor_input' type='text' placeholder='Apellidos *' required/>
                    <input className='AdminEditarAsesor_input' type='text' placeholder='Telefono *' required/>
                    <input className='AdminEditarAsesor_input' type='email' placeholder='Correo *' required/>
                </form>
                <div className='AdminEditarAsesor_div'>
                    <Select 
                        defaultValue = {[Tiendas]}
                        isMulti
                        name='Tiendas'
                        options={Tiendas}
                        className='AdminEditarAsesor_select'
                        classNamePrefix="select"
                        placeholder = 'Tiendas'
                    />
                </div>
                <BotonGuardar/>
                {guardadoExito}
            </body>
        </div>
    );
}

export default AdminEditarAsesor;