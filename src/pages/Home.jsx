import { useEffect, useState } from 'react';
import useApp from "../hooks/useApp";


import Table from "../components/Table";
import Header from "../components/Header";


const Home = () => {

    const { data, setData, cuatrimestreActual, setCuatrimetreActual, setCuatrimestre } = useApp();

    //UseEffect

    useEffect(() => {

        const getData = async () => {

            await fetch('/data/db.json')
                .then(datas => datas.json())
                .then(datos => setData(datos))

        }

        getData()


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

            <main className='p-6'>

                <div className="bg-slate w-full shadow-2xl  shadow-indigo-900 p-8">

                    <div className='flex justify-between place-items-center'>
                        <select

                            onChange={e => setCuatrimetreActual(e.target.value)}
                            value={cuatrimestreActual}
                            className='p-4 mb-4 bg-white text-2xl text-indigo-600 font-bold  shadow-lg  cursor-pointer w-1/2 text-center rounded-md' >

                            {data && data.map((cuatrimestre, index) => (

                                <option value={index + 1} key={index}>{`Cuatrimestre ${index + 1} `}</option>

                            ))};


                        </select>

                        <p>Credit 25 : 25</p>
                        <p>12000$</p>

                    </div>






                    <Table />


                    <a className='grid justify-end' href="/resume">{'-->'}</a>



                </div >





            </main>




        </>
    )
}

export default Home