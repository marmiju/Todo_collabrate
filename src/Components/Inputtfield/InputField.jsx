import React, { useState, useEffect } from 'react'
import '../Inputtfield/input.css'

export const InputField = () => {
    const [value, setValue] = useState('')
    const [list, setList] = useState([])

    // Load existing todos from localStorage once when the component mounts
    useEffect(() => {
        const existing = JSON.parse(localStorage.getItem('todo')) || []
        setList(existing)
    }, [])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const submit = () => {
        if (value.trim() === '') return // ignore empty input

        const updatedList = [...list, value]
        setList(updatedList) // update state
        localStorage.setItem('todo', JSON.stringify(updatedList)) // save to localStorage
        setValue('') // clear input field
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
