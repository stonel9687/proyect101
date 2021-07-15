import { useHistory } from "react-router-dom"

const ProjectListAdmin = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push('/appmanager/projectdetails')
    }

    return (
        <>
            <div className='list-project py-3'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4 className='text-center'>Proyectos Activos</h4>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between border-bottom project-name">
                    <div className='d-flex align-items-center'>
                        <p>Proyecto 1</p>
                    </div>
                    <div>
                        <div><i className="fas fa-eye" onClick={handleClick}></i></div>
                    </div>
                </div>
                <div className="d-flex justify-content-between project-name">
                    <div className='d-flex align-items-center'>
                        <p>Proyecto 2</p>
                    </div>
                    <div>
                        <div><i className="fas fa-eye" onClick={handleClick}></i></div>
                    </div>
                </div>
                <div className="d-flex justify-content-between project-name">
                    <div className='d-flex align-items-center'>
                        <p>Proyecto 3</p>
                    </div>
                    <div>
                        <div><i className="fas fa-eye" onClick={handleClick}></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectListAdmin
