import styles from "./EjemplosPortfolio.css"
import portfolioJson from "../../json/portfolio.json"
import { useEffect, useState } from "react"

const EjemplosPortfolio = () => {
    
    const [sitio, setSitios] = useState([])

    useEffect(()=>{
        fetch(`../../src/json/portfolio.json`)
        .then ((res)=> res.json())
        .then ((data)=> setSitios(data))
    },[])

    return (
        <div className="d-flex justify-content-around mt-3 flex-wrap portfolioWrap">
            {sitio.map((products)=>
            (
            <div className="d-flex flex-column alignt-items-around text-center p-4">
            <img src={`../../src/assets/${products.img}`} alt=""></img>
            <button className="btnPortfolio mt-4">Conocé más</button>
            </div>
            ))}
        </div>
    )
}

export default EjemplosPortfolio
