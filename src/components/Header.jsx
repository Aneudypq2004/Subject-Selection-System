import React from 'react'

export default function Header({msg}) {
    return (
        <div className='mt-4 mb-4'>
            
           <h1 className='text-center text-2xl uppercase font-bold  text-amber-400'>{msg}</h1>
        
        
        </div>
    )
}
