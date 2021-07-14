import ProjectListAdmin from "../component/project_list"
import DashBoard from "../../../shared/dashboard"
import { Route, Switch } from "react-router-dom"
import ProjectDetails from "../component/project_details"

const AppManager = () => {
    return (

        <DashBoard rol='appmanager'>
            <Switch>
                <Route path='/appmanager'>
                    <ProjectListAdmin />
                </Route>
                <Route path='/appmanager/projectdetails'>
                    <ProjectDetails />
                </Route>
            </Switch>
        </DashBoard>
    )
}

export default AppManager