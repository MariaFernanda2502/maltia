import React from 'react'; 
import AdminAnalistaForm from '../Pantallas/AdminAnalistaForm/AdminAnalistaForm';

function NuevoAnalista(props) {
    const analistaData = {
        nombre: '',
        apellidoMaterno: '',
        apellidoPaterno: '',
        correo: '',
        puesto: 'Analista',
    };
    const [analista, setAnalista] = React.useState(analistaData)
        
    return (
        <section>
            <AdminAnalistaForm analista={analista} onSave={setAnalista} />
        </section>
    )
}

export default NuevoAnalista;