import Login from "./modules/auth/login/login"
import { Switch, Route} from "react-router-dom"
import StoreKeeper from "./modules/store_keeper/pages/store_keeper.module"
import AppManager from "./modules/app_manager/pages/app_manager.modules"
import WarehouseAssistant from "./modules/warehouse_assistant/pages/warehouse_assistant.module"
import Supervisor from "./modules/supervisor/pages/supervisor.module"


const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <Login />
                </Route>
                <Route path='/storekeeper'>
                    <StoreKeeper />
                </Route>
                <Route path='/appmanager/'>
                    <AppManager/>
                </Route>
                <Route path='/warehouseassistant/'>
                    <WarehouseAssistant/>
                </Route>
                <Route path='/supervisor/'>
                    <Supervisor/>
                </Route>
            </Switch>
        </>
    )
}

export default Router