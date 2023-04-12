import { createContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [data, setData] = useState([]);

    const [cuatrimestreActual, setCuatrimetreActual] = useState(1);

    const [cuatrimestre, setCuatrimestre] = useState([]);

    const [subjetctSelect, setSubjectSelect] = useState( JSON.parse(localStorage.getItem('subjectSelect')) ?? []);

    const [maxCredit, setMaxCredit] = useState(+localStorage.getItem('maxCredit') ?? 0);

    const [total, setTotal] = useState(+localStorage.getItem('total') ?? 0);

    useEffect(() => {

        const selectCuatrimetre = () => {

            setCuatrimestre(data[cuatrimestreActual - 1] ?? [])
        }

        selectCuatrimetre()

    }, [cuatrimestreActual]);


    const handleSelect = subject => {

        const data = subjetctSelect.some(subjec => subjec.id === subject.id);

        if (data) {

            setMaxCredit(maxCredit - subject.credito);

            if (subject.id.split('-')[0].toLowerCase().startsWith('ing')) {

                setTotal(total - 4000);

            } else {
                setTotal(total - (subject.credito * 520));
            }

            const newSubjects = subjetctSelect.filter(data => data.id !== subject.id)

            setSubjectSelect(newSubjects)


            toast.info('DELETED SUCCESSFULLY')

            return
        }

        const response = handleCalcTotal(subject);

        if (!response) return
        setSubjectSelect([...subjetctSelect, subject]);
    }

    const handleCalcTotal = subject => {

        if ((subject.credito + maxCredit) > 25) {

            toast.error('THE MAX OF CREDIT IS 25')

            return false
        }

        setMaxCredit(maxCredit + subject.credito);

        //Know which subject is English, that must be 4000

        if (subject?.id.toLowerCase().split('-')[0].startsWith('ing')) {

            setTotal(total + 4000);

        } else {
            setTotal(total + (subject.credito * 520));
        }

        toast.success('ADDED SUCCESSFULLY');

        return true

    }


    // Keep states


    useEffect(() => {
        
        const subjects =  JSON.stringify(subjetctSelect);
        localStorage.setItem('subjectSelect', subjects);
        localStorage.setItem('total', total);
        localStorage.setItem('maxCredit', maxCredit)

    }, [subjetctSelect])

    return (
        <AppContext.Provider

            value={{
                data,
                setData,
                cuatrimestreActual,
                setCuatrimetreActual,
                setCuatrimestre,
                cuatrimestre,
                handleSelect,
                maxCredit,
                total,
                subjetctSelect

            }}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContext;

export {
    AppProvider
}
