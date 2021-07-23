import DashBoard from "../../../shared/dashboard"
import ProjectList from "../component/project_list"
import { Route, Switch, useHistory } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import ProjectDetails from "../../../shared/project_details"

const Supervisor = () => {
    const history = useHistory()

    const [projectName, setProjectName] = useState('')
    const [supervisorName, setSupervisorName] = useState('')
    const [projectDetails, setProjectDetails] = useState('')
    const [team, setTeam] = useState('')
    const [projectList, setProjectList] = useState([])

    const newProject = () => {
        history.push('/supervisor/newproject')
    }

    const editProject = () => {
        console.log('soy click editar');
    }

    const deleteProject = () => {
        console.log('soy ek click de borrar');
    }

    const handleProject = (e) => {
        setProjectName(e.target.value)
        console.log(projectName);
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

    const projectSubmit = () => {
        const id = new Date().getTime()
        const newProject = {
            id: id,
            projectName: projectName,
            Supervisor: supervisorName,
            description: projectDetails,
            team: team
        }
        const addProject = projectList.concat([newProject])
        setProjectList(addProject)
        setProjectName('')
        setSupervisorName('')
        setProjectDetails('')
        setTeam('')
        
    }


    useEffect(() => {
        history.push('/supervisor/projectlist')
        console.log(projectList);
    }, [])

    return (
        <>
            <DashBoard rol='supervisor'>
                <Switch>
                    <Route path='/supervisor/projectlist'>
                        <ProjectList
                            projectList={ProjectList}
                            editProject={editProject}
                            deleteProject={deleteProject}
                            newProject={newProject}
                        />
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
                            projectSubmit={projectSubmit}
                        />
                    </Route>
                </Switch>
            </DashBoard>
        </>
    )
}

export default Supervisor
