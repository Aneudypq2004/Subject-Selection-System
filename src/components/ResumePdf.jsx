import React from 'react'

import useApp from '../hooks/useApp'
import formatMoney from '../helpers/FormatMoney';
import { Link } from 'react-router-dom'


//Pdf
import { Document, Text, Page, View, StyleSheet} from '@react-pdf/renderer';



function ResumePdf() {

    const { subjetctSelect, total, maxCredit } = useApp();

    const handleMoney = amount => {

        if (amount == 0) {
            return formatMoney(4000)
        }

        return formatMoney(amount * 520)

    }


    return (
        <Document style={{ width: '100%' }}>
            <Page size={'A4'}>

                <Text>Resume</Text>

                <View className='md:p-6 '>

                    <View className="bg-slate w-full shadow-2xl pt-4 px-4 md:px-8 shadow-indigo-900">

                        <View className='w-full text-center border border-amber-400 table-fixed border-collapse '>

                            <View className='bg-amber-400'>

                                <View className=''>
                                    <Text className='p-4 uppercase'> id </Text>
                                    <Text className='p-4 uppercase'> Subject</Text>
                                    <Text className='p-4 uppercase'>credit </Text>
                                    <Text className='p-4 uppercase'>total</Text>
                                </View>

                            </View>

                            <View>

                                {subjetctSelect.length > 0 ? (

                                    subjetctSelect.map(cuatrimestreData => (

                                        <View key={cuatrimestreData.id} className='hover:bg-amber-100 cursor-pointer'>
                                            <Text>{cuatrimestreData.id}</Text>
                                            <Text>{cuatrimestreData.name}</Text>
                                            <Text>{cuatrimestreData.credito}</Text>
                                            <Text>{handleMoney(cuatrimestreData.credito)}</Text>
                                        </View>

                                    ))

                                ) : (

                                    ''
                                )
                                }

                                {/* Move totalMoney  under of each total  */}

                                <View>
                                    <Text className='text-center'> </Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text className='text text-center font-bold'>{formatMoney(total)}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default ResumePdf