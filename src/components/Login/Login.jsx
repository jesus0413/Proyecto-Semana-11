import React from 'react';
import "./styleLogin.css";

function Login () {
    return (
        <div className="loginContainer">
            <h2>Inicia Sesión</h2>
            <form className="signIn">
                <p>
                    <label>Usuario</label>
                    <input type="text" name="nombre" required></input>
                </p>
                <p>
                    <label>Contraseña</label>
                    <input type="password" name="Contraseña" required></input>
                </p>
                <p>
                    <button className="boton-enviar">Ingresar</button>
                </p>
            </form>
        </div>
    );
}

export default Login;