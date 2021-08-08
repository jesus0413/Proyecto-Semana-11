import React from 'react';
import "./styleRegister.css";
import{Link} from 'react-router-dom';

const Register =() => {
    return (
        <div className="registerContainer">
            <h2>Regístrate</h2>
            <form className="formulario">
                <p>
                    <label>Nombre</label>
                    <input type="text" name="nombre" required></input>
                </p>
                <p>
                    <label>Usuario</label>
                    <input type="text" name="Usuario"></input>
                </p>
                <p>
                    <label>Correo</label>
                    <input type="email" name="email" required></input>
                </p>
                <p>
                    <label>Crear contraseña</label>
                    <input type="password" name="Contraseña" required></input> 
                    </p>
                
                <div className="send">
                    <h5>¿Ya tienes una cuenta?</h5>
                    <Link to ="/signIn">Inicia Sesión</Link>
                    </div>
                 <button className="boton-enviar">Resgistrate</button> 
              
            </form>
        </div>
    );
}

export default Register;