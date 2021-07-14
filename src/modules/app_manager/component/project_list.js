import { useHistory } from "react-router-dom"

const ProjectListAdmin = () => {
    const history = useHistory()

    const handleClick=()=>{
        history.push('/appmanager/projectdetails')
    }

    return (
        <>
            <div className='list-project'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h2 className='text-center'>Proyectos Activos</h2>
                    </div>
                    <div className='d-flex'>
                        <button> Crear Nuevo Usuario</button>
                        <button>Inventario Existente</button>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between border-bottom project-name">
                    <div className='d-flex align-items-center'>
                        <p onClick={handleClick}>Proyecto 1</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between project-name">
                    <div className='d-flex align-items-center'>
                        <p>Proyecto 2</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between project-name">
                    <div className='d-flex align-items-center'>
                        <p>Proyecto 3</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectListAdmin
