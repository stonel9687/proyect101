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
                            <div>Crear/Editar Proyecto</div>
                            <div>Lista de Proyectos</div>
                        </div>
                    }
                    {rol === 'warehouse-assistant' &&
                        <div>
                            <p>Editar Perfil</p>
                            <p>Lista de Proyectos</p>
                        </div>
                    }

                </div>
                <div className='nav-box-1 d-flex aling-center'>
                    <p>soy un navbar</p>
                </div>
                <div className='dashboard-content position-absolute'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default DashBoard
