import ProjectListAdmin from "../component/project_list"
import DashBoard from "../../../shared/dashboard"
import { Route, Switch, useHistory } from "react-router-dom"

const AppManager = () => {
    return (

        <DashBoard rol='appmanager'>
            <Switch>
                <Route path='/appmanager'>
                    <ProjectListAdmin />
                </Route>
            </Switch>
        </DashBoard>
    )
}

export default AppManager