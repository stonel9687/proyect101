import DashBoard from "../../../shared/dashboard"
import CreateEditProyect from "../component/create_edit_project.js"

const Supervisor = () => {
    return (
        <>
            <DashBoard rol='supervisor'>
                <CreateEditProyect/>
            </DashBoard>
        </>
    )
}

export default Supervisor
