import { useState } from "react"
import { useHistory, Link } from "react-router-dom"

function Login() {


    return (
        <div className='container'>
            <div className='div-login'>
                <h4>Iniciar Sesion</h4>
                <form onSubmit>
                    <div className='input'>
                        <p> Usuario </p>
                        <input type='text' required></input>
                    </div>
                    <div className='input'>
                        <p> Contraseña </p>
                        <input type='password' required></input>
                    </div>
                    <div className='button-input'>
                        <button type='submit'>Ingresar</button>
                    </div>
                    <div className='button-input'>
                        <button type='submit'>Recuperar</button>
                    </div>
                </form>
            </div >
            <div className='img-container'>
            <img src=''/>
            </div>
        </div>
    )
}

export default Login