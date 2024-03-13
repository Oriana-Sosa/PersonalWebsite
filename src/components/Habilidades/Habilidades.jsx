import styles from "./Habilidades.css"
import js from "./../../assets/js.png"
import reactLogo from "./../../assets/reactjs.png"
import htmlLogo from "./../../assets/html.png"
import cssLogo from "./../../assets/css.png"
import english from "./../../assets/english.png"
import bootstrapLogo from "./../../assets/bootstrap.png"
import sass from "./../../assets/sass.png"
import canva from "./../../assets/canva.png"


const Habilidades = () => {
    return (
        <div className="container-fluid containerHabilidades">
            <div className="row">
            <a name="habilidades"><h2 className="titles">Habilidades</h2></a>
            <div id="carouselExample" className="carousel slide carousel-dark mt-5">
                <div className="carousel-inner">
                    <div className="carousel-item active text-center">
                        <img src={js} className="p-3" alt="..."/>
                        <img src={reactLogo} className="p-3"  alt="..."/>
                        <img src={htmlLogo} className="p-3" alt="..."/>
                        <img src={cssLogo} className="p-3" alt="..."/>
                    </div>
                    <div className="carousel-item text-center">
                        <img src={english} className="p-3" alt="..."/>    
                        <img src={bootstrapLogo} className="p-3" alt="..."/>
                        <img src={sass} className="p-3"  alt="..."/>
                        <img src={canva} className="p-3" alt="..."/>
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
        </div>
    )
}

export default Habilidades
