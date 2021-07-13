import { useHistory } from "react-router-dom"

const ProjectList = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push('/supervisor/newproject')
    }

    const handleClick2 = () => {
        history.push('/supervisor/projectlist')
    }

    return (
        <>
            <div className='list-project'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h2 className='text-center'>Lista de Proyecto</h2>
                    </div>
                    <div className='d-flex'>
                        <div><i className="fas fa-plus-circle icon-style" onClick={handleClick}></i></div>
                        <div><i className="fas fa-sync icon-style" onClick={handleClick2}></i></div>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between border-bottom project-name">
                    <div className=''>
                        <p>Proyecto 1</p>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <button type="button" className="btn " ><i class="fas fa-edit"></i></button>
                        </div>
                        <div>
                            <button type="button" className="btn " ><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between project-name">
                    <div className='text-center'>
                        <p>Proyecto 2</p>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <button type="button" className="btn " ><i class="fas fa-edit"></i></button>
                        </div>
                        <div>
                            <button type="button" className="btn " ><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between project-name">
                    <div>
                        <p>Proyecto 3</p>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <button type="button" className="btn " ><i class="fas fa-edit"></i></button>
                        </div>
                        <div>
                            <button type="button" className="btn " ><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectList
