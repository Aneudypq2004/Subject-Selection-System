import Header from "../components/Header";
import { useEffect, useState } from 'react';
import useApp from "../hooks/useApp";

const Home = () => {

    const {data, setData, cuatrimestreActual, setCuatrimetreActual,setCuatrimestre} = useApp();
   
    //UseEffect

    useEffect(() => {

        fetch('/data/db.json')
            .then(datas => datas.json())
            .then(datos => setData(datos))

    }, []);

    useEffect(() => {

        //Select Data from cuatrimestre to the fetch

        if (data) {
            setCuatrimestre(data[+cuatrimestreActual - 1]);
        }
    }, [cuatrimestreActual, data]);

    return (
        <>
            <Header />

            <main className='h-screen flex p-6 mt-4'>

                <div className="bg-slate w-full shadow-2xl shadow-indigo-900 p-8 gap-4 ">

                    <select

                        onChange={e => setCuatrimetreActual(e.target.value)}
                        value={cuatrimestreActual}
                        className='p-4 bg-white text-2xl text-indigo-600 font-bold  shadow-lg  cursor-pointer w-full text-center rounded-md' >

                        {data && data.map((cuatrimestre, index) => (

                            <option value={index + 1} key={index}>{`Cuatrimestre ${index + 1} `}</option>

                        ))};


                    </select>


                </div >



            </main>


        </>
    )
}

export default Home