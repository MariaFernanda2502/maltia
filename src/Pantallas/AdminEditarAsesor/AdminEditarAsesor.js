import Select from 'react-select';
import { Tiendas } from '../AdminNuevoAsesor/Tiendas';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import './AdminEditarAsesor.css';
import VentanaGuardado from '../../Componentes/VentanaGuardado/VentanaGuardado';


function AdminEditarAsesor() {
    let guardadoExito = null;
    let mostrarGuardado = false;
    
    if (mostrarGuardado) {
        guardadoExito = <VentanaGuardado/>;
    } 

    return (
        <div>
            <header>
                <FlechaRegresar/>
            </header>
            <body className='AdminEditarAsesor_body'>
                <h1 className='AdminEditarAsesor_h1'> Crear un asesor</h1>
                <form className='AdminEditarAsesor_form'>
                    <label className='AdminEditarAsesor_label'> Nombre(s) * </label>
                    <input className='AdminEditarAsesor_input' type='text' placeholder='Nombre(s) *' required />
                    <label className='AdminEditarAsesor_label'> Apellidos * </label>
                    <input className='AdminEditarAsesor_input' type='text' placeholder='Apellidos *' required/>
                    <label className='AdminEditarAsesor_label'> Telefono * </label>
                    <input className='AdminEditarAsesor_input' type='text' placeholder='Telefono *' required/>
                    <label className='AdminEditarAsesor_label'> Correo * </label>
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