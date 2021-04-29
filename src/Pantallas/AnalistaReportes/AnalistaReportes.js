import React, { useEffect, useState } from 'react';
import './CardsSelectoras.css';
import FlechaRegresar from '../../Componentes/FlechaRegresar/FlechaRegresar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Chart from '../../Componentes/Chart';
function AnalistaReportes() {
    const [reporte, setReporte] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/analista//generar-reporte`)
        .then((result)=>{
            setReporte(result.data.data)
        })
        .catch((error)=>{
        })
    },[]);

    const dataForChart = reporte.map((element)=>{
        return {type: 'bar', data: [element.total], color: 'blue', name: element.estatus}
    })
    return (
        <div className='PantallaCardsSelectoras_body'>
            <Link to='/analista' className='FlechaRegresar'><FlechaRegresar /></Link>
            <Chart 
            title="Reporte estatus"
            categories= {['']}
            isLegendVisible = {true}
            series={dataForChart}
            />
        </div>
    );
}

export default AnalistaReportes;