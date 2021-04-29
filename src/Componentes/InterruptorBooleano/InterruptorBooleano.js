import react from 'react';
import './InterruptorBooleano.css';

function InterruptorBooleano(props) {
    return (
        <label className="switch">
            <input type="checkbox" checked={props.checked} onClick={props.onClick} name={props.name}/>
            <span className="slider"></span>
        </label>
    );
}

export default InterruptorBooleano;