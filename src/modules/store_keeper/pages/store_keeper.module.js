import { useHistory, Link } from "react-router-dom"

const StoreKeeper = () => {

    const history = useHistory()

    const handleAddMat = () => (
        history.push('/storekeeper/addmaterials')
    )

    const handleInventoryList = ()=>{
        history.push('/storekeeper/inventorylist')
    }
    return (
        <>
            <Link to='/'>
                <button type="button" className="btn " >login</button>
            </Link>
        <hr/>
                <boton type='button' onclick={handleAddMat}> materiales</boton>
        <hr/>
                <boton type='button' onclick={handleInventoryList}> inventario</boton>
            
        </>
    )
}

export default StoreKeeper
