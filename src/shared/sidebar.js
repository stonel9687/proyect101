const SideBar = () => {
    return (
        <div className="aside">
            <div className="menuV">
                <div className="d-flex t-justify-center aling-center p-aside f-size-14">
                    <div><i className="fas fa-home red"></i></div>
                    <div><a href="#">Inicio</a></div>
                </div>
                <div className="d-flex t-justify-center aling-center p-aside f-size-14">
                    <div><i className="fas fa-fire"></i></div>
                    <div><a href="#">Tendencias</a></div>
                </div>
                <div className="d-flex t-justify-center aling-center p-aside f-size-14">
                    <div><i className="fab fa-youtube-square"></i></div>
                    <div><a href="#">Suscripcion</a></div>
                </div>
                <div className="d-flex t-justify-center aling-center p-aside f-size-14">
                    <div><i className="fab fa-youtube"></i></div>
                    <div><a href="#">Originals</a></div>
                </div>
            </div>
            <hr />
            <div className="menuV">
                <div className="d-flex t-justify-center aling-center p-aside f-size-14">
                    <div><i className="fas fa-book"></i></div>
                    <div><a href="#">Biblioteca</a></div>
                </div>
                <div className="d-flex t-justify-center aling-center p-aside f-size-14">
                    <div><i className="fas fa-history"></i></div>
                    <div><a href="#">Historial</a></div>
                </div>
                <div className="d-flex t-justify-center aling-center p-aside f-size-14">
                    <div><i className="far fa-play-circle"></i></div>
                    <div><a href="#">Mis videos</a></div>
                </div>
                <div className="d-flex t-justify-center aling-center p-aside f-size-14">
                    <div><i className="fas fa-film"></i></div>
                    <div><a href="#">Tus Peliculas</a></div>
                </div>
                <div className="d-flex t-justify-center aling-center p-aside f-size-14">
                    <div><i className="fas fa-clock"></i></div>
                    <div><a href="#">Ver mas tarde</a></div>
                </div>
            </div>
        </div>
    )
}

export default SideBar