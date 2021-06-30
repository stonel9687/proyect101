import { Link } from "react-router-dom"

function Login() {
    return (
        <div className='div-login'>
            <h4></h4>
                    <input required type="text" className="form-control" placeholder="Usuario" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <input required type="text" className="form-control" placeholder="Contraseña" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <Link to='/storekeeper'>
                        <button type="submit" className="button-add-ut btn btn-success">Login</button>
                    </Link>
        </div>
    )
}

export default Login