const CreateEditProyect = () => {

    return (
        <>
            <div className='background w-100'>
                <div className='pt-4'>
                    <h3 className='text-center'>Crear proyecto</h3>
                </div>
                <div className='pt-4 container'>
                    <div>
                        <button type="button" className="btn btn-dark mb-2">Regresar a lista de proyectos</button>
                    </div>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <button class="btn btn-success" type="button" id="button-addon1">Agregar</button>
                        </div>
                        <input type="text" class="form-control" placeholder="Item que desee ingresar" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        <div class="input-group-prepend">
                            <button class="btn btn-danger" type="button" id="button-addon1">Eliminar</button>
                        </div>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateEditProyect