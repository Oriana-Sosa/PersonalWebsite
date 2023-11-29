import { useContext, useState } from "react"
import { WebsContext } from "../../contexts/WebsContext"
import styles from "./Webs.css"
import { useEffect } from "react"

const Webs = () => {

    const {webs} = useContext(WebsContext)
    const [tecno, setTecno] = useState([])

    return (
        <div className="d-flex mt-5">
            <div className="col-lg-6">
                <img src={`../../src/assets/${webs.img}`} alt="" />
            </div>
            <div className="col-lg-6">
                <h3 className="nombreWebs">{webs.nombre}</h3>
                <p>{webs.info}</p>
                <p>{webs.info2}</p>
                <p className="invitacion">{webs.invitacion}</p>
                <button onClick={()=> setTecno(webs.tec)}>Tecnologías</button>
                <ul>
                    {tecno.map((ele)=>(
                        <li>{ele}</li>
                    ))}
                </ul>
                
            </div>
        </div>
    )
}

export default Webs
