import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import BotonGuardar from '../../Componentes/BotonGuardar/BotonGuardar';
import './AdminNuevoAnalista.css';
import VentanaGuardado from '../../Componentes/VentanaGuardado/VentanaGuardado';


function AdminNuevoAnalista() {
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
            <body className='AdminNuevoAnalista_body'>
                <h1 className='AdminNuevoAnalista_h1'> Crear un analista</h1>
                <form className='AdminNUevoAnalista_form'>
                    <input className='AdminNuevoAnalista_input' type='text' placeholder='Nombre(s) *' required />
                    <input className='AdminNuevoAnalista_input' type='text' placeholder='Apellidos *' required/>
                    <input className='AdminNuevoAnalista_input' type='text' placeholder='Telefono *' required/>
                    <input className='AdminNuevoAnalista_input' type='email' placeholder='Correo *' required/>
                </form>
                <BotonGuardar/>
                {guardadoExito}
            </body>
        </div>
    );
}

export default AdminNuevoAnalista;