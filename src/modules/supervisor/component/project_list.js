const ProjectList = () => {
    return (
        <>
            <div className='list-project'>
                <div>
                    <h2 className='text-center'>Lista de Proyecto</h2>
                </div>
                <div className="d-flex justify-content-between border-bottom project-name">
                    <div className=''>
                        <p>Proyecto 1</p>
                    </div>
                    <div>
                        <button type="button" className="btn " ><i class="far fa-check-circle"></i></button>
                    </div>
                </div>
                <div className="d-flex justify-content-between project-name">
                    <div className='text-center'>
                        <p>Proyecto 2</p>
                    </div>
                    <div>
                        <button type="button" className="btn " ><i class="far fa-check-circle"></i></button>
                    </div>
                </div>
                <div className="d-flex justify-content-between project-name">
                    <div>
                        <p>Proyecto 3</p>
                    </div>
                    <div>
                        <button type="button" className="btn " ><i class="far fa-check-circle"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectList
