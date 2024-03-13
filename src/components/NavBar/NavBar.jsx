/*NavBar que contendrá logo, nombre y links internos*/
import styles from "./NavBar.css"
import logo from "./../../assets/logoSitioWeb.png"


const NavBar = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-md ">
                <div className="container-fluid">
                    <div className="d-flex">
                        <img src={logo} className="logoNavBar" alt="Logo" />
                        <h1 className="websiteName">Oriana Sosa</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header justify-content-end">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body flex-md-row justify-content-md-end flex-sm-column">
                            <ul className="navbar-nav justify-content-md-between align-content-sm-between text-center">
                                <li className="nav-item m-2">
                                    <a className="linksNavBar" href="#aboutMe">Sobre mi</a>
                                </li>
                                <li className="nav-item m-2">
                                    <a className="linksNavBar" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item m-2">
                                <a className="linksNavBar" href="#habilidades">Habilidades</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
