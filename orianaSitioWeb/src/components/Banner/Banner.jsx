import styles from "./Banner.css"

const Banner = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row flex-sm-column flex-md-row">
                        <div className="col-md-6 text-center">
                            <img src="../../src/assets/logoSitioWeb.png" className="logoBanner " alt="Logo"/>
                        </div>
                        <div className="col-md-6 d-flex flex-column text-center align-items-md-start justify-content-center my-5 fade-in-top ">
                            <p className="saludoBanner fs-2">¡Hola! Me llamo</p>
                            <p className="nombreBanner fs-1">Oriana Sosa</p>
                            <p className="saludoBanner fs-2">y soy desarrolladora front-end</p>
                            <button className="botonBanner"><a href="https://www.linkedin.com/in/oriana-sosa/" className="linkLinkedin"  target="_blank">¡Contactáme!</a></button>
                        </div>  
                </div>
            </div>
        </>
    )
}

export default Banner
