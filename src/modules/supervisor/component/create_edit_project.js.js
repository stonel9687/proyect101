
const CreateEditProject = () => {
    return (
        <div className='d-flex section-project'>
            <div className='container'>
                <div>
                    <div className='input-add container'>
                        <div className=' container '>
                            <div >
                                <div className='d-flex justify-content-center'>
                                    <h4 className='text-aling-center' >Nuevo Proyecto</h4>
                                </div>
                            </div>
                            <form className="form-horizontal" onSubmit>
                                <div> 
                                    <span for="inputPassword" className="col-lg-2 control-label">Nombre del Proyecto</span>
                                    <input required type="text" className="form-control " placeholder="Nombre" aria-label="Recipient's username" onChange value />
                                    <span for="inputPassword" className="col-lg-2 control-label">Nombre del Supervisor</span>
                                    <input required type="text" className="form-control " placeholder="Email" aria-label="Recipient's username" onChange value />
                                    <span for="inputPassword" className="col-lg-2 control-label">Equipo</span>
                                    <input required type="text" className="form-control " placeholder="Telefono" aria-label="Recipient's username" onChange value />
                                    <span for="inputPassword" className="col-lg-2 control-label">Detalle del Proyecto</span>
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                                    </div>
                                </div>
                                <div>
                                    <span>Materiales a Utilizar</span>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <input className='input-list-project1' />
                                            <input className='input-list-project' />
                                        </div>
                                        <div>
                                            <select>
                                                <option value="20">20</option>
                                                <option value="30">30</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button>Check</button>
                                        </div>
                                    </div>
                                    <div>
                                        <ol class="list-group list-group-numbered">
                                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                                <div class="ms-2 me-auto">
                                                    <div class="fw-bold">Subheading</div>
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
                                <div className='d-flex justify-content-center'>
                                    <button>Crear</button>
                                    <button>Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateEditProject