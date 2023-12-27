import styles from "./Habilidades.css"

const Habilidades = () => {
    return (
        <div className="container-fluid">
            <h2 className="titles">Habilidades</h2>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active text-center">
                        <img src="../../src/assets/js.png" className="p-3" alt="..."/>
                        <img src="../../src/assets/reactjs.png" className="p-3"  alt="..."/>
                        <img src="../../src/assets/html.png" className="p-3" alt="..."/>
                        <img src="../../src/assets/css.png" className="p-3" alt="..."/>
                    </div>
                    <div className="carousel-item text-center">
                        <img src="../../src/assets/english.png" className="p-3" alt="..."/>    
                        <img src="../../src/assets/bootstrap.png" className="p-3" alt="..."/>
                        <img src="../../src/assets/canva.png" className="p-3"  alt="..."/>
                        <img src="../../src/assets/sass.png" className="p-3" alt="..."/>
                    </div>
                <button className="carousel-control-prev btsCarr" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next btsCarr" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
                </div>
            </div>
        </div>
    )
}

export default Habilidades
