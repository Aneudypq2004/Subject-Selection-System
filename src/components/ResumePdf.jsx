import React from 'react'

import useApp from '../hooks/useApp'
import formatMoney from '../helpers/FormatMoney';
import { Link } from 'react-router-dom'

import logo from '/logo.png'


//Pdf
import { Document, Text, Page, View, StyleSheet, Image } from '@react-pdf/renderer';


function ResumePdf({ subjetctSelect, total }) {

    const handleMoney = (amount, id) => {

        if (amount == 0 && id.split('-')[0].toLowerCase().startsWith('ing')) {
          return formatMoney(4000)
        }
    
        return formatMoney(amount * 520)
    
      }

    const styles = StyleSheet.create({
        body: {
            backgroundColor: "",
            padding: '1rem'

        },

        title: {
            color: 'rgb(49 46 129)',
            textAlign: 'center',
            fontSize: '3rem',

        },

        page: {
            padding: '40px',
            width: '100%',
            backgroundColor: 'rgb(243 244 246)',
        },


        head: {
            display: 'flex',
            flexDirection: 'row'

        },
        content: {
            display: 'flex',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            gap: '5px',
            border: '1px solid rgb(251 191 36)',
        }

    })


    return (
        <Document >

            <Page size={'A4'} style={styles.page}>

                <Image src={logo} />

                <Text style={{color: 'rgb(79 70 229)', textAlign: 'center',  fontWeight: 'bold', marginVertical: '20px'}}>Resume</Text>

                <View>

                    {subjetctSelect.map(cuatrimestreData => (

                        <View style={styles.content} key={cuatrimestreData.id} >

                            <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text>{cuatrimestreData.id}</Text>
                                <Text>{cuatrimestreData.name}</Text>
                            </View>

                            <View style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                                <Text>Credit: {cuatrimestreData.credito}</Text>
                                <Text>{handleMoney(cuatrimestreData.credito, cuatrimestreData.id)}</Text>

                            </View>



                        </View>
                    ))
                    }
                    {/* Move totalMoney  under of each total  */}

                    <View>
                        <Text style={{color: 'rgb(79 70 229)', textAlign: 'center',fontWeight: 'bold', marginVertical: '20px'}}>Total: {formatMoney(total)}</Text>
                    </View>
                </View >
            </Page >
        </Document >
    )
}

export default ResumePdf