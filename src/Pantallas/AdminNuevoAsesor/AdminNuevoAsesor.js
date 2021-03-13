import Select from 'react-select';
import { Tiendas } from './Tiendas';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import './AdminNuevoAsesor.css';
import VentanaGuardado from '../../Componentes/VentanaGuardado/VentanaGuardado';
import { Link } from 'react-router-dom';



function AdminNuevoAsesor() {
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
            <body className='AdminNuevoAsesor_body'>
                <h1 className='AdminNuevoAsesor_h1'> Crear un asesor</h1>
                <form className='AdminNUevoAsesor_form'>
                    <input className='AdminNuevoAsesor_input' type='text' placeholder='Nombre(s) *' required />
                    <input className='AdminNuevoAsesor_input' type='text' placeholder='Apellidos *' required/>
                    <input className='AdminNuevoAsesor_input' type='text' placeholder='Telefono *' required/>
                    <input className='AdminNuevoAsesor_input' type='email' placeholder='Correo *' required/>
                </form>
                <div className='AdminNuevoAsesor_div'>
                    <label className='AdminNuevoAsesor_la'>Tiendas</label>
                    <Select 
                        defaultValue = {[Tiendas]}
                        isMulti
                        name='Tiendas'
                        options={Tiendas}
                        className='AdminNuevoAsesor_select'
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

export default AdminNuevoAsesor;