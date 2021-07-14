import '../styles/styles.css'

const InventoryList = () => {

    return (
        <div className='background w-100'>
            <div className='pt-4'>
                <h3 className='text-center'>Lista de Inventario</h3>
            </div>
            <div className='pt-4 container'>
                <div>
                    <button type="button" className="btn btn-dark mb-2">Añadir items</button>
                </div>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon1">Buscar</button>
                    </div>
                    <input type="text" class="form-control" placeholder="Escriba el item que desee buscar" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                </div>
                <div className='div-list d-flex justify-content-between mb-2'>
                    <div className='d-flex'>
                        <div className='div-item'>
                            <h6>Item</h6>
                        </div>
                        <div className='div-code'>
                            <h6>Codigo</h6>
                        </div>
                        <div className='div-stock'>
                            <h6>Stock</h6>
                        </div>
                        <div className='div-item-desc'>
                            <h6>Articulo</h6>
                        </div>
                    </div>
                </div>
                <div className='div-list d-flex justify-content-between mb-2'>
                    <div className='d-flex'>
                        <div className='div-item'>
                            <p>1</p>
                        </div>
                        <div className='div-code'>
                            <p>tubcob34</p>
                        </div>
                        <div className='div-stock'>
                            <p>150</p>
                        </div>
                        <div className='div-item-desc'>
                            <p>Tuberia de cobre 3/4</p>
                        </div>
                    </div>
                    <div className='div-buttons'>
                        <button type="button" className="btn btn-primary">Editar</button>
                        <button type="button" className="btn btn-danger">Elimninar</button>
                    </div>
                </div>
                <div className='div-list d-flex justify-content-between mb-2'>
                    <div className='d-flex'>
                        <div className='div-item'>
                            <p>2</p>
                        </div>
                        <div className='div-code'>
                            <p>tubhie38</p>
                        </div>
                        <div className='div-stock'>
                            <p>50</p>
                        </div>
                        <div className='div-item-desc'>
                            <p>Tuberia de hierro 3/8</p>
                        </div>
                    </div>
                    <div className='div-buttons'>
                        <button type="button" className="btn btn-primary">Editar</button>
                        <button type="button" className="btn btn-danger">Elimninar</button>
                    </div>
                </div>
                <div className='div-list d-flex justify-content-between mb-2'>
                    <div className='d-flex'>
                        <div className='div-item'>
                            <p>3</p>
                        </div>
                        <div className='div-code'>
                            <p>conexpvc14</p>
                        </div>
                        <div className='div-stock'>
                            <p>418</p>
                        </div>
                        <div className='div-item-desc'>
                            <p>Conexión PVC de 1/4</p>
                        </div>
                    </div>
                    <div className='div-buttons'>
                        <button type="button" className="btn btn-primary">Editar</button>
                        <button type="button" className="btn btn-danger">Elimninar</button>
                    </div>
                </div>
                <div className='div-list d-flex justify-content-between mb-2'>
                    <div className='d-flex'>
                        <div className='div-item'>
                            <p>4</p>
                        </div>
                        <div className='div-code'>
                            <p>conexace12</p>
                        </div>
                        <div className='div-stock'>
                            <p>1000000</p>
                        </div>
                        <div className='div-item-desc'>
                            <p>Conexión de acero galvanizado de 1/2</p>
                        </div>
                    </div>
                    <div className='div-buttons'>
                        <button type="button" className="btn btn-primary">Editar</button>
                        <button type="button" className="btn btn-danger">Elimninar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InventoryList

{/* <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className='pt-2 mr-2'>
                            <p>Item: 1</p>
                            <hr/>
                            <p>Cod: 12345678</p>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary ml-2">Editar</button>
                            <button type="button" className="btn btn-success ml-2">Eliminar</button>
                        </div>
                    </li>
                    <li className="list-group-item">Item 2
                        <button type="button" className="btn btn-primary ml-2">Editar</button>
                        <button type="button" className="btn btn-success ml-2">Eliminar</button>
                    </li>
                    <li className="list-group-item">Item 3
                        <button type="button" className="btn btn-primary ml-2">Editar</button>
                        <button type="button" className="btn btn-success ml-2">Eliminar</button>
                    </li>
                    <li className="list-group-item">Item 4
                        <button type="button" className="btn btn-primary ml-2">Editar</button>
                        <button type="button" className="btn btn-success ml-2">Eliminar</button>
                    </li>
                    <li className="list-group-item">Item 5
                        <button type="button" className="btn btn-primary ml-2">Editar</button>
                        <button type="button" className="btn btn-success ml-2">Eliminar</button>
                    </li>
                </ul> */}