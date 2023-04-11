import React, { useState } from 'react'
import useApp from '../hooks/useApp'
import { useEffect } from 'react';

function Table() {

  const { cuatrimestre, cuatrimestreActual, handleSelect } = useApp();

  const [data, setData] = useState([]);

  useEffect(() => {

    if (cuatrimestre && cuatrimestreActual) {

      setData(cuatrimestre[`Cuatrimestre ${cuatrimestreActual}`])

    }

  }, [cuatrimestre])

  return (
    <>
      <table className='w-full text-center border border-amber-400 table-fixed border-collapse '>

        {/* Head */}

        <thead className='bg-amber-400'>

          <tr className=''>
            <th className='p-4 uppercase spa'> id </th>
            <th className='p-4 uppercase spa'> Subject</th>
            <th className='p-4 uppercase spa'>credit </th>
            <th className='p-4 uppercase spa'>Pre-requisitos  </th>
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
              <td>{cuatrimestreData['Pre-requisitos'] || '    '}</td>

              <td>

                <button type='button'

                  onClick={() => handleSelect(cuatrimestreData.id)}

                  className='p-2 text-white bg-indigo-600 font-bold uppercase rounded-sm hover:bg-indigo-800'>
                  Select

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