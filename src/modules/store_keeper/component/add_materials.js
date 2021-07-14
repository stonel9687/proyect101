const AddMaterials = () => {

    return (
        <>
            <div className='background w-100'>
                <div className='pt-4'>
                    <h3 className='text-center'>Agregar items</h3>
                </div>
                <div className='pt-4 container'>
                    <div>
                        <button type="button" className="btn btn-dark mb-2">Regresar a lista de inventario</button>
                    </div>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <button class="btn btn-success" type="button" id="button-addon1">Agregar</button>
                        </div>
                        <input type="text" class="form-control" placeholder="Escribir item a ingresar" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        <input type="number" class="form-control" placeholder="Cantidad" aria-label="Example text with button addon" aria-describedby="button-addon1" />
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

export default AddMaterials