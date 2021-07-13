import almacen from '../../../assets/image/image_login/almacen.jpg'


function Login() {

    return (
        <section>
            <div className='contenedor'>
                <div className='contenedor_contenido'>
                    <div className='contenedor_form'>
                        <div>
                            <h2 className='text-center'>Iniciar Sesion</h2>
                        </div>
                        <form>
                            <div className="input">
                                <span>Usuario</span>
                                <input type='text' className='user' required></input>
                            </div>
                            <div className="input">
                                <span>Contraseña</span>
                                <input type='password' className='password ' required></input>
                            </div>
                            <div className='input'>
                                <button type='submit' className='mt-5'>
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
