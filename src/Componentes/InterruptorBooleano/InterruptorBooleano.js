import react from 'react';
import './InterruptorBooleano.css';

function InterruptorBooleano() {
    return (
        <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
        </label>
    );
}

export default InterruptorBooleano;