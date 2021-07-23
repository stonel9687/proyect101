import { useState } from "react"
import { useHistory } from "react-router-dom"

const ProjectList = (props) => {
    const history = useHistory()

    const { editProject, deleteProject, newProject, projectList } = props

    return (
        <>
            <div className='list-project'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h2 className='text-center'>Lista de Proyecto</h2>
                    </div>
                    <div className='d-flex'>
                        <div><i className="fas fa-plus-circle icon-style" onClick={newProject}></i></div>
                        <div><i className="fas fa-sync icon-style" ></i></div>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-between border-bottom project-name">
                    {projectList.map((project) => {
                        return (
                            <div className='d-flex align-items-center'>
                                <p>{project.projectName}</p>
                            </div>
                        )
                    })}
                    <div className='d-flex'>
                        <div>
                            <button type="button" className="btn " ><i class="fas fa-edit" onClick={editProject}></i></button>
                        </div>
                        <div>
                            <button type="button" className="btn " ><i class="fas fa-trash-alt" onClick={deleteProject}></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectList
