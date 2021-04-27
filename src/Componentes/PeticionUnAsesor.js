import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; // Importar axios
import AdminAsesorForm from '../Pantallas/AdminAsesorForm/AdminAsesorForm';

function PeticionUnAsesor(props) {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const [asesor, setAsesor] = useState({});

    useEffect(() => {
        setStatus('Loading') // Esta esperando el resultado
        setError(null); // Inicializa con null
        axios.get(`http://localhost:5000/admin/asesores/${props.match.params.userId}`)
        .then((result) => {
            setAsesor(result.data.data)
            setStatus('Resolved') // Resuelto, ya tienes información
        })
        .catch((error) => {
            setError(error)
            setStatus('Error') // Error
        })
    }, [])

    if(status === 'idle' || status === 'Loading') {
        return <h1> loading... </h1>
    }

    if(status === 'Error') {
        return (
            <div role='alert'>
                <p> You have one error </p>
                <pre>{error.message}</pre> 
            </div>
        )
    }

    if(status === 'Resolved') {
        return (
            <section className='Page'>
                <AdminAsesorForm asesor={asesor} onSave={setAsesor}/>
            </section>
        )
    }
}

export default PeticionUnAsesor;