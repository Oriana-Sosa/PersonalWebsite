import { createContext, useState } from "react";

const WebsContext = createContext()

function WebsProvider (props) {
    
    const [webs, setWebs] = useState("")

    return(
    <WebsContext.Provider value={{webs, setWebs}}>
        {props.children}
    </WebsContext.Provider>
    )

}

export {WebsContext, WebsProvider}
