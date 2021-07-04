const Navbar=()=>{
    return(
        <nav className="d-flex nav-section">
            <div className="nav-box-1 d-flex aling-center">
                <div><i className="fas fa-bars yt-bars"/></div>
                <div className="s-bar">
                    <img src alt="logo" className="yt-img"/>
                </div>
            </div>
            <div className="nav-box-2 d-flex aling-center j-content-center">
                <input type="search" placeholder="Buscar" className="input-nav"/>
                <button className="t-justify-center">
                    <i className="fa fa-search yt-scout" aria-hidden="true"/>
                </button>
            </div>
            <div className="nav-box-3 d-flex aling-center f-size-25">
                <a href="#"><i className="fas fa-video m-right-28"/></a>
                <a href="#"><i className="fas fa-th m-right-28"/></a>
                <a href="#"><i className="fas fa-bell m-right-28"/></a>
                <a href="#"><i className="fas fa-user-circle"/></a>
            </div>
        </nav>
    )
}

export default Navbar