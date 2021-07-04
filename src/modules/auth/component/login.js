import { useState } from "react"
import { useHistory, Link } from "react-router-dom"


function Login() {

    return (
        <section>
            <div className='contenedor'>
                <div className='contenedor_contenido'>
                    <div className='contenedor_form'>
                        <h2>Iniciar Sesion</h2>
                        <form>
                            <div className="input">
                                <span>Usuario</span>
                                <input type='text' className='user' required></input>
                            </div>
                            <div className="input">
                                <span>Contraseña</span>
                                <input type='password' className='password ' required></input>
                            </div>
                            <div className="input">
                                <button type='submit'>
                                    <p className='button_log'> Ingresar</p>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='img-container'>
                        <img />
                    </div>
                    <div className='contenedor_error'>
                        <p> Ups! parece que tus credenciales no concuerdadn</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login