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
                    <div className='AdminEditarAsesor_div'>
                        <label className='AdminEditarAsesor_label'>Nombre(s) *</label>
                        <input className='AdminEditarAsesor_input' type='text' placeholder='María Fernanda' required />
                    </div>
                    <div className='AdminEditarAsesor_div'>
                        <label className='AdminEditarAsesor_label'>Apellidos *</label>
                        <input className='AdminEditarAsesor_input' type='text' placeholder='Salvador Velasco' required/>
                    </div>
                    <div className='AdminEditarAsesor_div'>
                        <label className='AdminEditarAsesor_label'>Teléfono *</label>
                        <input className='AdminEditarAsesor_input' type='text' placeholder='7712919340' required/>
                    </div>
                    <div className='AdminEditarAsesor_div'>
                        <label className='AdminEditarAsesor_label'>Correo</label>
                        <input className='AdminEditarAsesor_input' type='email' placeholder='ferchasalvador25@gmail.com' required/>
                    </div>
                </form>
                <div>
                    <label className='AdminEditarAsesor_la'>Tiendas</label>
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