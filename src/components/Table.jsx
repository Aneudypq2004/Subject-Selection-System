import React, { useState } from 'react'
import useApp from '../hooks/useApp'
import { useEffect } from 'react';

function Table() {

  const { cuatrimestre, cuatrimestreActual, handleSelect, subjetctSelect } = useApp();

  const [data, setData] = useState([]);


  useEffect(() => {

    if (cuatrimestre && cuatrimestreActual) {

      setData(cuatrimestre[`Cuatrimestre ${cuatrimestreActual}`])

    }

  }, [cuatrimestre]);


  const verifyIs = id => subjetctSelect.some(subject => subject.id == id)





  return (
    <>
      <table className='w-full text-center border border-amber-400 table-fixed border-collapse '>

        {/* Head */}

        <thead className='bg-amber-400'>

          <tr className=''>
            <th className='p-4 uppercase spa'> id </th>
            <th className='p-4 uppercase spa'> Subject</th>
            <th className='p-4 uppercase spa'>credit </th>
            <th className='p-4 uppercase pre'>prerequisites</th>
            <th className='p-4 uppercase spa'></th>
          </tr>

        </thead>

        {/* //Table Body */}

        <tbody className=''>

          {data && data.map(cuatrimestreData => (

            <tr className='hover:bg-amber-100 cursor-pointer'
              key={cuatrimestreData.id}>

              <td>{cuatrimestreData.id}</td>
              <td>{cuatrimestreData.name}</td>
              <td>{cuatrimestreData.credito}</td>
              <td className='pre'>{cuatrimestreData['Pre-requisitos'] || '    '}</td>

              <td>

                <button type='button'

                  onClick={() => handleSelect(cuatrimestreData)}

                  className={`

                  p-2 text-white  font-bold uppercase rounded-sm 
                  ${verifyIs(cuatrimestreData.id) ? 'bg-red-600 hover:bg-red-800' : 'bg-indigo-600 hover:bg-indigo-800'}                  
                  `}>

                  {verifyIs(cuatrimestreData.id) ? 'Delete' : 'Select'}
                  
                </button>

              </td>

            </tr>

          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table