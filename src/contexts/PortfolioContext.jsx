import { createContext, useEffect, useState } from "react";
import json from "../json/portfolio.json"

const PortfolioContext = createContext()

//Propósito de la función: proveer un array con todos los sitios web del portfolio y su información.

function PortfolioProvider (props) {
    const [sitio, setSitio] = useState([])

    //Creo una función que permitirá ser usada con un useEffect en futuros componentes.
    const getSitio = () => {
        fetch(`../../src/json/portfolio.json`)
        .then ((res)=> res.json())
        .then ((data)=> setSitio(data))
    }

    return (
        <PortfolioContext.Provider value={{sitio, getSitio}}>
            {props.children}
        </PortfolioContext.Provider>
    )
}

export {PortfolioContext, PortfolioProvider}