import React, { useState, useEffect } from 'react'
import '../Inputtfield/input.css'

export const InputField = ({resultlist}) => {
    const [value, setValue] = useState('')
    const [list, setList] = useState([])

    useEffect(() => {
        const existing = JSON.parse(localStorage.getItem('todo')) || []
        setList(existing)
    }, [])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const submit = () => {
        if (value.trim() === '') return 

        const updatedList = [...list, value]
        setList(updatedList) 
        localStorage.setItem('todo', JSON.stringify(updatedList)) // save to localStorage
        setValue('') 
    }

    return (
        <div>
            <div className='indiv'>
                <input
                    onChange={handleChange}
                    value={value}
                    className='inputbox'
                    type="text"
                    placeholder="Add a new task"
                />
                <button onClick={submit}>Add New</button>
            </div>

            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
