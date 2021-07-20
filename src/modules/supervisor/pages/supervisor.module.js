import DashBoard from "../../../shared/dashboard"
import ProjectList from "../component/project_list"
import { Route, Switch, useHistory } from "react-router-dom"
import React, { useEffect,useState } from 'react'
import ProjectDetails from "../../../shared/project_details"

const Supervisor = () => {
    const history = useHistory()

    const [projectName, setProjectName] = useState('')
    const [supervisorName, setSupervisorName] = useState('')
    const [projectDetails, setProjectDetails] = useState('')
    const [team, setTeam] = useState('')

    const handleProject = (e) => {
        setProjectName(e.target.value)
    }

    const handleSupervisor = (e) => {
        setSupervisorName(e.target.value)
    }

    const handleDetails = (e) => {
        setProjectDetails(e.target.value)
    }

    const handleTeam = (e) => {
        setTeam(e.target.value)
    }

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
                        <ProjectDetails
                            projectName={projectName}
                            supervisorName={supervisorName}
                            projectDetails={projectDetails}
                            team={team}
                            handleProject={handleProject}
                            handleSupervisor={handleSupervisor}
                            handleDetails={handleDetails}
                            handleTeam={handleTeam}
                        />
                    </Route>
                </Switch>
            </DashBoard>
        </>
    )
}

export default Supervisor
