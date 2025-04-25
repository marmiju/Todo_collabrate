import React, { useState } from 'react'
import '../Inputtfield/input.css'

export const InputField = () => {
    const [value, setValue] = useState('')

    function handlechenge (e){
         val = e.target.value
         console.log(val)

    }
 
  return (
    <div className='indiv'>
        <input onChange={handlechenge} className='inputbox' type="text"/>
        <button>Add New</button>
    </div>
  )
}
