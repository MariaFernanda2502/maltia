import Select from 'react-select';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import './AdminEditarAnalista.css';
import VentanaGuardado from '../../Componentes/VentanaGuardado/VentanaGuardado';
import { Link } from 'react-router-dom';
import { Departamentos } from '../AdminNuevoAnalista/Departamentos';


function AdminEditarAnalista() {
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
            
            <body className='AdminEditarAnalista_body'>
                <h1 className='AdminEditarAnalista_h1'> Analista #50000 </h1>
                <form className='AdminEditarAnalista_form'>
                    <div className='AdminEditarAnalista_div'>
                        <label className='AdminEditarAnalista_label'>Nombre(s) *</label>
                        <input className='AdminEditarAnalista_input' type='text' placeholder='María Fernanda' required />
                    </div>
                    <div className='AdminEditarAnalista_div'>
                        <label className='AdminEditarAnalista_label'>Apellidos *</label>
                        <input className='AdminEditarAnalista_input' type='text' placeholder='Salvador Velasco' required/>
                    </div>
                    <div className='AdminEditarAnalista_div'>
                        <label className='AdminEditarAnalista_label'>Teléfono *</label>
                        <input className='AdminEditarAnalista_input' type='text' placeholder='7712919349' required/>
                    </div>
                    <div className='AdminEditarAnalista_div'>
                        <label className='AdminEditarAnalista_label'>Correo *</label>
                        <input className='AdminEditarAnalista_input' type='email' placeholder='ferchasalvador@gmail.com' required/>
                    </div>
                </form>
                <div >
                    
                    <label className='AdminEditarAnalista_la'>Departamento</label>
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

export default AdminEditarAnalista;

