import Login from "./modules/auth/component/login"
import { Switch, Route} from "react-router-dom"
import StoreKeeper from "./modules/store_keeper/pages/store_keeper.module"

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <Login />
                </Route>
                <Route exact path='/storekeeper'>
                    <StoreKeeper />
                </Route>
            </Switch>
        </>
    )
}

export default Router