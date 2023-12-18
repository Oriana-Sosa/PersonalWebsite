
const Habilidades = () => {
    return (
        <div className="container">
            <h2 className="titles">Habilidades</h2>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../../src/assets/logoSitioWeb.png" width="200px" alt="..."/>
                        <img src="../../src/assets/logoSitioWeb.png" width="200px"  alt="..."/>
                        <img src="../../src/assets/logoSitioWeb.png" width="200px" alt="..."/>
                        <img src="../../src/assets/logoSitioWeb.png" width="200px" alt="..."/>
                        <img src="../../src/assets/logoSitioWeb.png" width="200px" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="../../src/assets/logoSitioWeb.png" width="200px" alt="..."/>
                        <img src="../../src/assets/logoSitioWeb.png" width="200px"  alt="..."/>
                        <img src="../../src/assets/logoSitioWeb.png" width="200px" alt="..."/>
                        <img src="../../src/assets/logoSitioWeb.png" width="200px" alt="..."/>
                        <img src="../../src/assets/logoSitioWeb.png" width="200px" alt="..."/>
                    </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
    )
}

export default Habilidades
