import DashBoard from "../../../shared/dashboard"
import CreateEditProject from "../component/create_edit_project.js"

const Supervisor = () => {
    return (
        <>
            <DashBoard rol='supervisor'>
                <CreateEditProject/>
            </DashBoard>
        </>
    )
}

export default Supervisor
