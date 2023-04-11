import { createContext, useEffect } from "react";
import { useState } from "react";

const AppContext = createContext();


const AppProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [cuatrimestreActual, setCuatrimetreActual] = useState(1);
    const [cuatrimestre, setCuatrimestre] = useState([]);
    const [subjetctSelect, setSubjectSelect] = useState([]);
    const [maxCredit, setMaxCredit] = useState(0)


    useEffect(() => {

        const selectCuatrimetre = () => {

            setCuatrimestre(data[cuatrimestreActual - 1])
        }

        selectCuatrimetre()

    }, [cuatrimestreActual]);


    const handleSelect = id => {

        const dataSelect = Object.values(cuatrimestre)[0];

        const select = dataSelect.filter(subject => subject.id == id);

        

        // setSubjectSelect(...subjetctSelect, select);

    }






    return (
        <AppContext.Provider

            value={{
                data,
                setData,
                cuatrimestreActual,
                setCuatrimetreActual,
                setCuatrimestre,
                cuatrimestre,
                handleSelect

            }}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContext;

export {
    AppProvider
}
