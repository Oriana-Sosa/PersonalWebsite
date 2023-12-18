import { useContext, useEffect, useState } from "react"
import { WebsContext } from "../../contexts/WebsContext"
import styles from "./Webs.css"


const Webs = () => {

    const {webs} = useContext(WebsContext)
    //Creo un array con las tecnologías de cada sitio web para facilitar su manejo
    const [tecno, setTecno] = useState([])

    //Si encuentra una web seleccionada, seteará las tenoclogías de dicho sitio web en el array tecno. Esto ocurre cada vez que cambia el sitio web seleccionado. Esto evita que el sitio falle cuando no se ha seleccionado ningun sitio.
    useEffect(()=>{
        if (webs){
            setTecno(webs.tec)
        }
    },[webs])

    return (
        <div className="d-flex mt-5 flex-column flex-md-row">
            <div className="col-lg-6   ">
                <img src={`../../src/assets/${webs.img}`} className="m-5" alt="" />
                <img src={`../../src/assets/${webs.img2}`} className="img2 m-5" alt="" />
            </div>
            <div className="col-lg-6">
                <h3 className="nombreWebs">{webs.nombre}</h3>
                <p className="textInfo">{webs.info}</p>
                <p className="textInfo">{webs.info2}</p>
                <p className="textInfo">{webs.info3}</p>
                <p className="invitacion">{webs.invitacion}</p>
                <h5 className="nombreWebs">{webs.subtitulo}</h5>
                <ul className="lista d-flex flex-wrap">
                    {tecno.map((ele, i)=>(
                        <li key={i} className="elementsList m-3">{ele}</li>
                    ))}
                </ul> 
            </div>
        </div>
    )
}

export default Webs
