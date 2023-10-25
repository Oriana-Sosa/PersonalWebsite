import { useContext } from "react"
import { WebsContext } from "../../contexts/WebsContext"
import styles from "./Webs.css"

const Webs = () => {

    const {webs} = useContext(WebsContext)

    return (
        <div className="d-flex mt-5">
            <div className="col-lg-6">
                <img src={`../../src/assets/${webs.img}`} alt="" />
            </div>
            <div className="col-lg-6">
                <h3 className="nombreWebs">{webs.nombre}</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat nulla quas facilis praesentium magnam nostrum maxime harum aspernatur odit?</p>
                <h4>Tecnologías usadas:</h4>
            </div>
        </div>
    )
}

export default Webs
