import DashBoard from "../../../shared/dashboard"
import ProjectList from "../component/project_list"
import CreateEditProject from "../component/create_edit_project.js"
import { Route, Switch, useHistory } from "react-router-dom"
import React, { useEffect } from 'react'

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
                        <CreateEditProject />
                    </Route>
                </Switch>
            </DashBoard>
        </>
    )
}

export default Supervisor
