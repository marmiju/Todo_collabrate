import React, { useState } from 'react'
import '../Inputtfield/input.css'

export const InputField = () => {
    const [value, setValue] = useState('')

    function handlechenge (e){
        const val = e.target.value
         setValue(val)

    }
 
  return (
    <div >
        <div className='indiv'>
            <input onChange={handlechenge} className='inputbox' type="text"/>
        <button>Add New</button>
        </div>
        <p>{value}</p>
    </div>
  )
}
