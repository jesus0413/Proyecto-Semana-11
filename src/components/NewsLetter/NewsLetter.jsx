import React from 'react';
import "./styleNewsLetter.css";
import{Link} from 'react-router-dom';

const Register =() => {
    return (
        <div className="newsContainer">
            <div className="title">
            <h2>Suscribete para estar al dia con las tendencias en bebidas</h2></div>
            <form className="form">
                <p>
                    <label>Nombre</label>
                    <input type="text" name="nombre" required></input>
                </p>
                <p>
                    <label>Correo</label>
                    <input type="email" name="email" required></input>
                </p>
                 <Link to= "/"><button>Suscribete!</button> </Link>
              
            </form>
        </div>
    )
};

export default Register;