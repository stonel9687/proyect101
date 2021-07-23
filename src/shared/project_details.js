import { useHistory } from "react-router-dom"

const ProjectDetails = (props) => {
    const history = useHistory()

    const { projectSubmit,projectName, projectDetails, supervisorName, team, handleDetails, handleProject, handleTeam, handleSupervisor } = props
    const handleClick = () => {
        history.push('/supervisor/projectlist')
    }

    return (
        <form onSubmit={projectSubmit} className='section-project p-4'>
            <div className='icon-style d-inline'>
                <i className="fas fa-chevron-left" onClick={handleClick}></i>
            </div>
            <div className='d-flex justify-content-between section-create'>
                <div className='d-info'>
                    <div className='d-flex justify-content-center'>
                        <h5 className='text-aling-center' >Nuevo Proyecto</h5>
                    </div>
                    <hr />
                    <div>
                        <div>
                            <span for="inputPassword" className="col-lg-2 control-label ">Nombre del Proyecto</span>
                            <input required type="text" className="form-control input-form mt-2" placeholder="Nombre de Proyecto" aria-label="Recipient's username" onChange={handleProject} value={projectName} />
                            <span for="inputPassword" className="col-lg-2 control-label">Nombre del Supervisor</span>
                            <input required type="text" className="form-control input-form mt-2" placeholder="Nombre de Supervisor" aria-label="Recipient's username" onChange={handleSupervisor} value={supervisorName} />
                            <span for="inputPassword" className="col-lg-2 control-label">Detalle del Proyecto</span>
                            <div className="form-floating">
                                <textarea className="form-control input-form mt-2" rows='4' placeholder="Descripcion" id="floatingTextarea2" onChange={handleDetails} value={projectDetails} ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-info'>
                    <div className='d-flex justify-content-center'>
                        <h5 className='text-aling-center' >Integrantes</h5>
                    </div>
                    <hr />
                    <div>
                        <span for="inputPassword" className="col-lg-2 control-label">Equipo</span>
                        <input required type="text" className="form-control input-form mt-2" placeholder="Telefono" aria-label="Recipient's username" onChange={handleTeam} value={team} />
                    </div>
                    <div>
                        <div className="input-form div-team overflow-auto py-1">
                            <div className='ml-3'>
                                <input className="check-input" type="checkbox" value="" />
                                <span>eliud</span>
                            </div>
                            <div className='ml-3'>
                                <input className="check-input" type="checkbox" value="" />
                                <span>jeshua</span>
                            </div>
                            <div className='ml-3'>
                                <input className="check-input" type="checkbox" value="" />
                                <span>guille</span>
                            </div>
                            <div className='ml-3'>
                                <input className="check-input" type="checkbox" value="" />
                                <span>Luis</span>
                            </div>
                            <div className='ml-3'>
                                <input className="check-input" type="checkbox" value="" />
                                <span>cesar</span>
                            </div>
                            <div className='ml-3'>
                                <input className="check-input" type="checkbox" value="" />
                                <span>douglas</span>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <h5 className='text-aling-center' >Autorizado</h5>
                    </div>
                    <hr />
                    <div>
                        <p className='input-form mt-autho'> Eliud</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='d-description '>
                <div className='d-flex justify-content-center'>
                    <h4 className='text-aling-center' >Materiales</h4>
                </div>
                <hr />
                <div className='pt-2'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <input className='input-list-project1 input-form-mat' placeholder='Ingrese Materiales' />
                        </div>
                        <div>
                            <select className='input-form'>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                        <div>
                            <button type='button' className='input-form'>Check</button>
                        </div>
                    </div>
                    <div>
                        <ol className="list-group list-group-numbered">
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto ">
                                    <div className="fw-bold ">Subheading</div>
                                    Conector Recto 3/4
                                </div>
                                <span className="badge bg-primary rounded-pill">14</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Caja A011</div>
                                </div>
                                <span className="badge bg-primary rounded-pill">14</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Subheading</div>
                                    Copla EMT 3/4
                                </div>
                                <span className="badge bg-primary rounded-pill">14</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-end mt-3'>
                <button className='input-form bg-button-form-cancel'>Cancelar</button>
                <button type='submit' className='input-form bg-button-form'>Crear</button>
            </div>
        </form>
    )
}

export default ProjectDetails
