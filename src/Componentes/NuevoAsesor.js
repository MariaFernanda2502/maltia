import React from 'react'; 
import AdminAsesorForm from '../Pantallas/AdminAsesorForm/AdminAsesorForm';

function NuevoAsesor(props) {
    const asesorData = {
        nombre: '',
        apellidoMaterno: '',
        apellidoPaterno: '',
        correo: '',
        puesto: 'Asesor',
    };
    const [asesor, setAsesor] = React.useState(asesorData)
        
    return (
        <section>
            <AdminAsesorForm asesor={asesor} onSave={setAsesor} />
        </section>
    )
}

export default NuevoAsesor;