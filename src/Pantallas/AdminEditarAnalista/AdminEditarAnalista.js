import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import './AdminEditarAnalista.css';
import VentanaGuardado from '../../Componentes/VentanaGuardado/VentanaGuardado';
import { Link } from 'react-router-dom';


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
                    <input className='AdminEditarAnalista_input' type='text' placeholder='Nombre(s) *' required />
                    <input className='AdminEditarAnalista_input' type='text' placeholder='Apellidos *' required/>
                    <input className='AdminEditarAnalista_input' type='text' placeholder='Telefono *' required/>
                    <input className='AdminEditarAnalista_input' type='email' placeholder='Correo *' required/>
                </form>
                <BotonGuardar/>
                {guardadoExito}
            </body>
        </div>
    );
}

export default AdminEditarAnalista;

