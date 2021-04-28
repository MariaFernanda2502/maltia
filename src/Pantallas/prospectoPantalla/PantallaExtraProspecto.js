import React from 'react';
import ProspectoPantalla from './prospectoPantalla';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import FlechaRegresar from '../../Componentes/FlechaRegresar';


function PantallaExtraProspecto(props){

    const [prospecto, setProspecto] = useState({});
    const [status,setStatus] =useState('idle');
    const [error, setError] = useState(null);

    useEffect(()=>{
        axios.get(`http://localhost:5000/asesor/informacion-prospecto/${props.match.params.id}`)
        .then((result)=>{
            setProspecto(result.data.data)
            setStatus('resolved')
        })
        .catch((error)=>{
            setError(error)
            setStatus('error')
        })
    },[]);

    if(status === 'idle' || status === 'loading'){
        return <h1>Cargando...</h1>
    }

    if(status === 'error'){
        return <h1>Hubo un error </h1>
    }

    if(status === 'resolved'){
        return(
            <div id="contenido">
                <div className="botonFlecha">
                    <nav>
                        <Link to="/asesor"><FlechaRegresar /></Link>
                    </nav>
                </div>
                <h1>Prospecto {prospecto.prospectId}</h1>
                <ProspectoPantalla prospecto={prospecto} onSave={setProspecto}/>
            </div>
        )
    }
}

export default PantallaExtraProspecto;