const DashBoard = ({ children, rol }) => {

    return (
        <>
            <div className='d-flex position-relative'>
                <div className="aside">
                    {rol === 'appmanager' &&
                        <div>
                            <i class="fas fa-user s-bar"></i>
                            <p>Douglas reyes </p>
                            <p>App Manager</p>
                        </div>
                    }
                    {rol === 'storekeeper' &&
                        <div>
                            <i class="fas fa-user s-bar"></i>
                            <p>Douglas reyes </p>
                            <p>Bodeguero</p>
                        </div>
                    }
                    {rol === 'supervisor' &&
                        <div>
                            <i class="fas fa-user s-bar"></i>
                            <p>Douglas reyes </p>
                            <p>Supervisor</p>
                        </div>
                    }
                    {rol === 'warehouseassitant' &&
                        <div>
                            <i class="fas fa-user s-bar"></i>
                            <p>Douglas reyes </p>
                            <p>Asistente de Bodega</p>
                        </div>
                    }
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
                    {rol === 'appmanager' &&
                        <div>
                            <p>Editar Perfil</p>
                            <p>Crear Usuario</p>
                            <p>Proyectos Activos</p>
                            <p>Inventario Existente</p>
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
