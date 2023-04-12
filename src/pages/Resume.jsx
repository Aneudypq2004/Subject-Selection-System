import React from 'react'

import Header from '../components/Header'
import useApp from '../hooks/useApp'
import formatMoney from '../helpers/FormatMoney';
import { useState } from 'react';
import { Link } from 'react-router-dom'

//Pdf
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import ResumePdf from '../components/ResumePdf';


function Resume() {

  const { subjetctSelect, total } = useApp();
  const [view, setView] = useState(false)

  const handleMoney = (amount, id) => {

    if (amount == 0 && id.split('-')[0].toLowerCase().startsWith('ing')) {
      return formatMoney(4000)
    }

    return formatMoney(amount * 520)

  }

  const handleViewPdf = () => {
    setView(!view);
  }


  return (
    <>
      <Header msg={'Resume'} />

      <main className='md:p-6 '>

        <div className="bg-slate w-full shadow-2xl py-4 px-4 md:px-8 shadow-indigo-900">

          <table className='w-full text-center border border-amber-400 table-fixed border-collapse '>

            <thead className='bg-amber-400'>

              <tr className=''>
                <th className='p-4 uppercase'> id </th>
                <th className='p-4 uppercase'> Subject</th>
                <th className='p-4 uppercase'>credit </th>
                <th className='p-4 uppercase'>total</th>
              </tr>

            </thead>

            <tbody>

              {subjetctSelect.length > 0 ? (

                subjetctSelect.map(cuatrimestreData => (

                  <tr key={cuatrimestreData.id} className='hover:bg-amber-100 cursor-pointer'>
                    <td>{cuatrimestreData.id}</td>
                    <td>{cuatrimestreData.name}</td>
                    <td>{cuatrimestreData.credito}</td>
                    <td>{handleMoney(cuatrimestreData.credito, cuatrimestreData.id)}</td>
                  </tr>

                ))

              ) : (

                <tr><td colSpan={4}>Empty</td></tr>
              )
              }

              {/* Move totalMoney  under of each total  */}

              <tr>
                <td className='text-center'> </td>
                <td></td>
                <td></td>
                <td className='text text-center font-bold'>{formatMoney(total)}</td>
              </tr>
            </tbody>
          </table>

          <div className='flex justify-between w-full pt-4 '>

            <Link className='w-max' to={'/'}>
              <img className='rotate-180 ' src="https://img.icons8.com/ios/50/null/arrow--v1.png" />
            </Link>

            <PDFDownloadLink document={<ResumePdf subjetctSelect={subjetctSelect} total={total} />} fileName='Test.pdf'>
              <button onClick={handleViewPdf} className='px-8 py-4 font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 transition-all duration-500'> View </button>          </PDFDownloadLink>

          </div>


        </div>
      </main >

    </>
  )
}

export default Resume