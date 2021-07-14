import DashBoard from "../../../shared/dashboard"
import AddMaterials from "../component/add_materials"
import InventoryList from "../component/inventory_list"


const StoreKeeper = () => {

    return (
        <>
            <DashBoard rol='storekeeper'>
                <AddMaterials />
            </DashBoard>
        </>
    )
}

export default StoreKeeper