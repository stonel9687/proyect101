
const CreateEditProject = () => {
    return (
        <section className='d-flex container section-project'>
            <div className='w-50 container'>
                <div>
                    <div className='input-add container'>
                        <div className=' container border border-secondary'>
                            <div className='text-align-center'>
                                <h4>Add New Contact</h4>
                            </div>
                            <form className="form-horizontal" onSubmit>
                                <label for="inputPassword" className="col-lg-2 control-label">Nombre del Proyecto</label>
                                <input required type="text" className="form-control " placeholder="Nombre" aria-label="Recipient's username" onChange value />
                                <label for="inputPassword" className="col-lg-2 control-label">Nombre del Supervisor</label>
                                <input required type="text" className="form-control " placeholder="Email" aria-label="Recipient's username" onChange value />
                                <label for="inputPassword" className="col-lg-2 control-label">Equipo</label>
                                <input required type="text" className="form-control " placeholder="Telefono" aria-label="Recipient's username" onChange value />
                                <label for="inputPassword" className="col-lg-2 control-label">Detalle del Proyecto</label>
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                                </div>
                                <div>
                                    <p>Materiales a Utilizar</p>
                                    
                                </div>
                                <div className='m-top'>
                                    <button>Crear</button>
                                    <button>Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default CreateEditProject