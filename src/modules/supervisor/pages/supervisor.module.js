import DashBoard from "../../../shared/dashboard"
import ProjectList from "../component/project_list"
import { Route, Switch, useHistory } from "react-router-dom"
import React, { useEffect } from 'react'
import ProjectDetails from "../../../shared/project_details"

const Supervisor = () => {
    const history = useHistory()

    useEffect(() => {
        history.push('/supervisor/projectlist')
    }, [])
    return (
        <>
            <DashBoard rol='supervisor'>
                <Switch>
                    <Route path='/supervisor/projectlist'>
                        <ProjectList />
                    </Route>
                    <Route path='/supervisor/newproject'>
                        <ProjectDetails />
                    </Route>
                </Switch>
            </DashBoard>
        </>
    )
}

export default Supervisor
