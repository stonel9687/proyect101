import { useState } from "react"
import { useHistory, Link } from "react-router-dom"
import almacen from '../../../assets/image/image_login/almacen.jpg'
import './login.css'


function Login() {

    return (
        <section className='section-log '>
            <div className='contenedor-log'>
                <div className='contenedor_contents'>
                    <div className='contenedor_form'>
                        <div>
                            <h2 className='text-center h2-log'>Iniciar Sesion</h2>
                        </div>
                        <form>
                            <div className="input">
                                <span>Usuario</span>
                                <input type='text' className='user input-log' required></input>
                            </div>
                            <div className="input">
                                <span>Contraseña</span>
                                <input type='password' className='password input-log ' required></input>
                            </div>
                            <div className='input'>
                                <button type='submit' className='mt-3'>
                                    <p className='button_log mb-0'> Ingresar</p>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='img-container'>
                        <img src={almacen} />
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
