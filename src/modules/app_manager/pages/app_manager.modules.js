import ProjectListAdmin from "../component/project_list"
import DashBoard from "../../../shared/dashboard"
import { Route, Switch, useHistory } from "react-router-dom"
import ProjectDetails from "../../../shared/project_details"
import React, { useEffect } from 'react'

const AppManager = () => {
    const history = useHistory()
    useEffect(() => {
        history.push('/appmanager/projectlist')
    }, [])
    return (

        <DashBoard rol='appmanager'>
            <Switch>
                <Route path='/appmanager/projectlist'>
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
