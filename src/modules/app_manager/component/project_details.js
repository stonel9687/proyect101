import { useHistory } from "react-router-dom"

const ProjectDetails = () => {
const history=useHistory()

const handleClick=()=>{
    history.push('/appmanager/projectlist')
}

    return (
        <div className='section-project'>
            <div className='d-flex justify-content-between section-create'>
                <div className='d-info'>
                    <div className='d-flex justify-content-center'>
                        <h5 className='text-aling-center' >Nuevo Proyecto</h5>
                    </div>
                    <hr />
                    <form>
                        <div>
                            <span for="inputPassword" className="col-lg-2 control-label ">Nombre del Proyecto</span>
                            <input required type="text" className="form-control input-form" placeholder="Nombre" aria-label="Recipient's username" onChange value disabled />
                            <span for="inputPassword" className="col-lg-2 control-label">Nombre del Supervisor</span>
                            <input required type="text" className="form-control input-form " placeholder="Email" aria-label="Recipient's username" onChange value disabled />
                            <span for="inputPassword" className="col-lg-2 control-label">Detalle del Proyecto</span>
                            <div class="form-floating">
                                <textarea class="form-control input-form" placeholder="Leave a comment here" id="floatingTextarea2" disabled></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='d-info'>
                    <div className='d-flex justify-content-center'>
                        <h5 className='text-aling-center' >Integrantes</h5>
                    </div>
                    <hr />
                    <div>
                        <span for="inputPassword" className="col-lg-2 control-label">Equipo</span>
                        <input required type="text" className="form-control input-form" placeholder="Telefono" aria-label="Recipient's username" onChange value disabled />
                    </div>
                    <div>
                        <label class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="" disabled/>
                            Eliud
                        </label>
                        <label class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="" disabled/>
                            Jeshua
                        </label>
                        <label class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="" disabled/>
                            Guille
                        </label>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <h5 className='text-aling-center' >Autorizado</h5>
                    </div>
                    <hr />
                    <div>
                        <p> Eliud</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='d-description'>
                <div className='d-flex justify-content-center'>
                    <h4 className='text-aling-center' >Materiales</h4>
                </div>
                <hr />
                <div>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <input className='input-list-project1 input-form-mat' placeholder='Ingrese Materiales' disabled />
                        </div>
                        <div>
                            <select className='input-form'>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                        <div>
                            <button className='input-form'>Check</button>
                        </div>
                    </div>
                    <div>
                        <ol class="list-group list-group-numbered">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto ">
                                    <div class="fw-bold ">Subheading</div>
                                    Conector Recto 3/4
                                </div>
                                <span class="badge bg-primary rounded-pill">14</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Caja A011</div>
                                </div>
                                <span class="badge bg-primary rounded-pill">14</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Subheading</div>
                                    Copla EMT 3/4
                                </div>
                                <span class="badge bg-primary rounded-pill">14</span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className='d-flex justify-content-end mt-3'>
                    <button className='input-form bg-button-form-cancel' onClick={handleClick}>Cancelar</button>
                    <button className='input-form bg-button-form'>Crear</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
