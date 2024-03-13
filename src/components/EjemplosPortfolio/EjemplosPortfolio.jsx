import styles from "./EjemplosPortfolio.css"
import { useContext, useEffect, useState } from "react"
import { PortfolioContext } from "../../contexts/PortfolioContext"
import { WebsContext } from "../../contexts/WebsContext"


const EjemplosPortfolio = () => {
    //Obtengo el array con mis sitios web y su info, y la función para traerlos con un useEffect.
    const {sitio} = useContext(PortfolioContext)
    const {getSitio} = useContext(PortfolioContext)

    useEffect(()=>{
        getSitio()
    },[])

    //Función para cambiar el sitio web de mi portfolio seleccionado.
    const {setWebs} = useContext(WebsContext)

    return (
        <div className="d-flex justify-content-around mt-3 flex-wrap portfolioWrap">
            {sitio.map((web)=>
            (
            <div key={web.id} className="d-flex flex-column alignt-items-around text-center p-4">
            <img src={web.img} alt=""></img>
            <button className="btnPortfolio mt-4" onClick={()=> setWebs(web)}>Conocé más</button> 
            </div> //setWebs identificará el sitio que se seleccionó y lo seteara como la web seleccionada.
            ))}   
        </div>
    )
    
}

export default EjemplosPortfolio
