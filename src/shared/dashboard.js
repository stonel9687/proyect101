const DashBoard = ({ children, rol }) => {
    return (
        <>
            <div className='d-flex position-relative'>
                <div className="aside">
                    <div>
                        <i class="fas fa-user s-bar"></i>
                        <p>Douglas reyes </p>
                        <p>supervisor</p>
                    </div>
                    {rol === 'app-manager' &&
                        <div>
                            <p>Editar Perfil</p>
                            <p>Lista de Proyectos</p>
                            <p>Crear Usuario</p>
                            <p>Lista de Inventario</p>
                        </div>
                    }
                    {rol === 'storekeeper' &&
                        <div>
                            <p>Editar Perfil</p>
                            <p>Lista de Materiales</p>
                            <p>Agregar Inventario</p>
                        </div>
                    }
                    {rol === 'supervisor' &&
                        <div>
                            <p>Editar Perfil</p>
                            <p>Crear/Editar Proyecto</p>
                            <p>Lista de Proyectos</p>
                        </div>
                    }
                    {rol === 'warehouse-assistant' &&
                        <div>
                            <p>Editar Perfil</p>
                            <p>Lista de Proyectos</p>
                        </div>
                    }
                    <div>
                        <p>L</p>
                    </div>
                </div>
                <div className='nav-box-1 d-flex aling-center'>
                    <p>soy un navbar</p>
                </div>
                <div className='bg-success position-absolute'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default DashBoard

    // < div className = "menuV" >
    //                     <div className="d-flex t-justify-center aling-center p-aside f-size-14">
    //                         <div><i className="fas fa-home red"></i></div>
    //                         <div><a href="#">Inicio</a></div>
    //                     </div>
    //                     <div className="d-flex t-justify-center aling-center p-aside f-size-14">
    //                         <div><i className="fas fa-fire"></i></div>
    //                         <div><a href="#">Tendencias</a></div>
    //                     </div>
    //                     <div className="d-flex t-justify-center aling-center p-aside f-size-14">
    //                         <div><i className="fab fa-youtube-square"></i></div>
    //                         <div><a href="#">Suscripcion</a></div>
    //                     </div>
    //                     <div className="d-flex t-justify-center aling-center p-aside f-size-14">
    //                         <div><i className="fab fa-youtube"></i></div>
    //                         <div><a href="#">Originals</a></div>
    //                     </div>
    //                 </ >
    //                 <hr />
    //                 <div className="menuV">
    //                     <div className="d-flex t-justify-center aling-center p-aside f-size-14">
    //                         <div><i className="fas fa-book"></i></div>
    //                         <div><a href="#">Biblioteca</a></div>
    //                     </div>
    //                     <div className="d-flex t-justify-center aling-center p-aside f-size-14">
    //                         <div><i className="fas fa-history"></i></div>
    //                         <div><a href="#">Historial</a></div>
    //                     </div>
    //                     <div className="d-flex t-justify-center aling-center p-aside f-size-14">
    //                         <div><i className="far fa-play-circle"></i></div>
    //                         <div><a href="#">Mis videos</a></div>
    //                     </div>
    //                     <div className="d-flex t-justify-center aling-center p-aside f-size-14">
    //                         <div><i className="fas fa-film"></i></div>
    //                         <div><a href="#">Tus Peliculas</a></div>
    //                     </div>
    //                     <div className="d-flex t-justify-center aling-center p-aside f-size-14">
    //                         <div><i className="fas fa-clock"></i></div>
    //                         <div><a href="#">Ver mas tarde</a></div>
    //                     </div>