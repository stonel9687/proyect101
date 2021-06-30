import { Link } from "react-router-dom"

const StoreKeeper = () => {
    return (
        <>
            <Link to='/'>
                <button type="button" className="btn " >login</button>
            </Link>
            <Link to='/storekeeper/addmaterials'>
                <boton> materiales</boton>
            </Link>
            <Link to='/storekeeper/inventorylist'>
                <boton> inventario</boton>
            </Link>
        </>
    )
}

export default StoreKeeper
