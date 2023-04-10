import { createContext } from "react";
import { useState } from "react";

const AppContext = createContext();


const AppProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [cuatrimestreActual, setCuatrimetreActual] = useState(1);    
    const [cuatrimestre, setCuatrimestre] = useState([]);




    return (
        <AppContext.Provider

            value={{
                data, 
                setData,
                 cuatrimestreActual, 
                 setCuatrimetreActual,
                 setCuatrimestre,
                 cuatrimestre

            }}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContext;

export {
    AppProvider
}
