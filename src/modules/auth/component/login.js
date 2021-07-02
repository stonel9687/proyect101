import { useState } from "react"
import { useHistory, Link } from "react-router-dom"

function Login() {


    return (
        <div className='container'>
            <div className='div-login'>
                <h4>Iniciar Sesion</h4>
                <form onSubmit>
                    <div>
                        <p> Usuario </p>
                        <input type='text' required></input>
                    </div>
                    <div>
                        <p> Contraseña </p>
                        <input type='password' required></input>
                    </div>
                    <div>
                        <button type='submit'>Ingresar</button>
                    </div>
                    <div>
                        <button type='submit'>Recuperar</button>
                    </div>
                </form>
            </div >
            <div className='img-container'>
            <p></p>
            </div>
        </div>
    )
}

export default Login